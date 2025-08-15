Param(
    [Parameter(Mandatory = $false)]
    [string]$CalendarPath = "../CONTENT_CALENDAR.csv",
    [Parameter(Mandatory = $false)]
    [string]$OutputDir = "../export"
)

if (!(Test-Path $CalendarPath)) {
    Write-Error "Takvim bulunamadı: $CalendarPath"
    exit 1
}

if (!(Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

$rows = Import-Csv -Path $CalendarPath

foreach ($row in $rows) {
    if ($row.status -and $row.status -ne "idea") { continue }
    $date = $row.date
    $topic = ($row.topic -replace "\s+", "-").ToLower()
    $format = ($row.format).ToLower()
    $name = "${date}_${topic}_${format}_v01"
    New-Item -ItemType File -Path (Join-Path $OutputDir "$name.txt") -Force | Out-Null
}

Write-Output "Dosya isimleri oluşturuldu: $OutputDir"


