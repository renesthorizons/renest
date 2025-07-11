# Script to copy HTML files with sequential numbering
$baseFiles = @('taxes-1.html', 'graduate-students-1.html', 'budgeting-1.html', 'student-401k-1.html', 'international-students-1.html')

foreach ($baseFile in $baseFiles) {
    if (Test-Path $baseFile) {
        Write-Host "Processing $baseFile..."
        $baseName = $baseFile -replace '-1\.html$', ''
        
        # For taxes, start from 26 since you already have 1-25
        if ($baseName -eq 'taxes') {
            $startNum = 26
        } else {
            $startNum = 2
        }
        
        for ($i = $startNum; $i -le 100; $i++) {
            $newFileName = "$baseName-$i.html"
            Copy-Item $baseFile $newFileName
            if ($i % 10 -eq 0) { 
                Write-Host "  Created up to $newFileName" 
            }
        }
        $totalCreated = 100 - $startNum + 1
        Write-Host "  Completed $baseName series - created $totalCreated files"
    } else {
        Write-Host "Warning: $baseFile not found"
    }
}

Write-Host "Done! Created copies numbered through -100.html for each base file." 