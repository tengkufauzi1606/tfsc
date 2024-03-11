<script>
document.addEventListener('DOMContentLoaded', function () {
    const allowedReferers = ['facebook.com', 'google.com', 'instagram.com', 'yahoo.com'];
    const mobileUserAgents = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    function checkReferer() {
        const referer = document.referrer.toLowerCase();
        const autohideElements = document.querySelectorAll('.autohide');
        const isAllowedReferer = allowedReferers.some(function (allowedReferer) {
            return referer.includes(allowedReferer);
        });

        // Deteksi user agent
        const userAgent = navigator.userAgent;
        const isMobileUserAgent = mobileUserAgents.test(userAgent);

        // Jika referer diizinkan dan user agent menunjukkan perangkat mobile, tampilkan elemen-elemen dengan class "autohide"
        if (isAllowedReferer && isMobileUserAgent) {
            autohideElements.forEach(function (element) {
                element.style.display = 'block';
            });
        }
    }

    // Panggil fungsi checkReferer saat halaman dimuat
    checkReferer();
});
</script>