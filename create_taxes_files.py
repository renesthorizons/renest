#!/usr/bin/env python3
import os
import shutil

def create_taxes_files():
    source_file = "taxes-1.html"
    
    # Check if source file exists
    if not os.path.exists(source_file):
        print(f"Error: {source_file} does not exist!")
        return
    
    created_count = 0
    skipped_count = 0
    
    # Create taxes-2.html through taxes-100.html
    for i in range(2, 101):
        target_file = f"taxes-{i}.html"
        
        # Only create if it doesn't already exist
        if not os.path.exists(target_file):
            try:
                shutil.copy2(source_file, target_file)
                print(f"Created: {target_file}")
                created_count += 1
            except Exception as e:
                print(f"Error creating {target_file}: {e}")
        else:
            print(f"Skipped: {target_file} (already exists)")
            skipped_count += 1
    
    print(f"\nSummary:")
    print(f"Created: {created_count} files")
    print(f"Skipped: {skipped_count} files")
    print(f"Total: {created_count + skipped_count} files processed")

if __name__ == "__main__":
    create_taxes_files() 