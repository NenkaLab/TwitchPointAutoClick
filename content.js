var insert = `
setInterval(function() {
    let btn = document.querySelector("div.chat-input.tw-block.tw-pd-b-1.tw-pd-x-1 > div:nth-child(2) > div.chat-input__buttons-container.tw-flex.tw-justify-content-between.tw-mg-t-1 > div:nth-child(1) > div > div > div > div.tw-full-height.tw-relative.tw-z-above > div > div > div > button");
    if(btn != null) {
        btn.click();
        console.log("포인트 수집됨");
    }
}, 5000);
console.log("자동 수집 활성화됨");
`;

var script = document.createElement("script");
script.innerHTML = insert;

document.querySelector("body").appendChild(script);