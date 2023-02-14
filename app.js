$(() => {
    console.log("Page loaded.")
})

$("#mode").on('change', () => {
    const mode = $("#mode :selected").val();

    switch (mode) {
        case "tile-background":
            // Add title to button
            $("#store-link").empty().append(`
                <div class="link-contents">
                    <p class="ql-title">Online Store</p>
                </div>
            `);
            console.log("Updating background...")
            $("#store-link").css({
                backgroundImage:"url('https://cos-marcos.s3.amazonaws.com/production/wordpress/../uploads/2023/02/06060858/xlarge-tile-bg.jpg')",
                backgroundSize:"cover",
            })

            break;
    }

})