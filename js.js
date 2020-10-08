$("#img0").click(function () {
    // 獲取彈窗
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    // 獲取圖片插入到彈窗
    var modalImg = document.getElementById("img_content");
    modalImg.src = zpadress;
    // 獲取 <span> 元素，設定關閉按鈕
    var span = document.getElementsByClassName("close")[0];
    // 當點選 (x), 關閉彈窗
    span.onclick = function () {
        modal.style.display = "none";
    };
});