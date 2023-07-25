
function onSubmitForm(event) {
    const form = event.target;
    event.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbzbJObTS0xfo_VBM-16WwEap-rFzS3yyr1rNjFO_uc5rnT7nSnGfJ8dUImLsqFV2_La/exec', {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            if (response.ok) {
                // Nếu thành công, thực hiện các hành động khác ở đây
                alert('Dữ liệu đã được gửi thành công!');
                form.reset();
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            } else {
                alert('Lỗi khi gửi dữ liệu form.');
            }
        })
        .catch(error => {
            console.log({ error })
            alert('Đã xảy ra lỗi:', error);
        });
}