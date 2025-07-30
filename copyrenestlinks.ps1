# Find all files ending with -1.html
$foundFiles = Get-ChildItem -Filter "*-1.html" | Select-Object -ExpandProperty Name

# Array to store files user wants to copy
$filesToCopy = @()

# Check which files exist and ask user which ones to copy
Write-Host "Found the following -1.html files:" -ForegroundColor Green
foreach ($file in $foundFiles) {
    Write-Host "  $file" -ForegroundColor Cyan
}
Write-Host ""

foreach ($file in $foundFiles) {
    $response = Read-Host "Copy $file (y/n)"
    if ($response -eq "y" -or $response -eq "Y") {
        $filesToCopy += $file
    }
}

# If no files selected, exit
if ($filesToCopy.Count -eq 0) {
    Write-Host "No files selected for copying. Exiting." -ForegroundColor Red
    exit
}

# Ask for maximum number
do {
    $maxNumber = Read-Host "Enter the maximum number to copy to (e.g., 100 for -100.html)"
    $maxNum = 0
} while (-not [int]::TryParse($maxNumber, [ref]$maxNum) -or $maxNum -lt 2)

Write-Host ""
Write-Host "Starting copy process..." -ForegroundColor Green

# Process each selected file
foreach ($sourceFile in $filesToCopy) {
    Write-Host "Processing $sourceFile..." -ForegroundColor Cyan
    
    # Extract the base name (e.g., "banking" from "banking-1.html")
    $baseName = $sourceFile -replace "-1\.html$", ""
    
    $copiedCount = 0
    $skippedCount = 0
    
    # Copy from -2.html to -[max].html
    for ($i = 2; $i -le $maxNum; $i++) {
        $targetFile = "$baseName-$i.html"
        
        if (-not (Test-Path $targetFile)) {
            try {
                Copy-Item $sourceFile $targetFile
                $copiedCount++
                Write-Host "  Created: $targetFile" -ForegroundColor Green
            } catch {
                Write-Host "  Error creating $targetFile : $_" -ForegroundColor Red
            }
        } else {
            $skippedCount++
            Write-Host "  Skipped: $targetFile (already exists)" -ForegroundColor Yellow
        }
    }
    
    Write-Host "  Summary for $sourceFile : $copiedCount copied, $skippedCount skipped" -ForegroundColor Magenta
    Write-Host ""
}

Write-Host "Copy process completed!" -ForegroundColor Green