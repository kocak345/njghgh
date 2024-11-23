document.getElementById('upload-btn').addEventListener('click', async () => {
    const fileInput = document.getElementById('ppt-upload');
    if (fileInput.files.length > 0) {
        const formData = new FormData();
        formData.append('pptFile', fileInput.files[0]);

        try {
            const response = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            console.log("File berhasil diunggah:", result.filePath);
        } catch (error) {
            console.error("Gagal mengunggah file:", error);
        }
    } else {
        alert("Pilih file PowerPoint terlebih dahulu!");
    }
});
