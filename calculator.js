//���ʃe�L�X�g�{�b�N�X
var ResultLabel = document.getElementById('result');
var LeftSide = 0;
var OperBefore = "";
var BeforeOneClickOpeFlg = false;
document.addEventListener('keydown',keydownEvent,false);

//キーダウンイベント
function keydownEvent(event){
    if(!isNaN(event.key)){
        //数値
        clickButton(event.key);
    }else{
        //数値以外
        if(event.key === "="){
            clickEq();
        }else if(event.key === "Delete"){
            clickClear();
        }else if(event.key === "Backspace"){
            clickBs();
        }else{
            clickCulc(event.key);
        }
    }
}

//ResultLabel.style.border = "solid 1px black";

//���l�{�^��
function clickButton(num){
    if (ResultLabel.innerHTML === "0"){
        ResultLabel.innerHTML = "";
    }
    // if (OperBefore !== "") {
    if(BeforeOneClickOpeFlg){
        LeftSide = ResultLabel.innerHTML;
        ResultLabel.innerHTML = num;
    } else {
        ResultLabel.innerHTML = String(ResultLabel.innerHTML) + String(num);
    }
    BeforeOneClickOpeFlg = false;
}

//�v���X�}�C�i�X�{�^��
function clickButtonMi(){
    ResultLabel.innerHTML = ResultLabel.innerHTML * -1;
}

function clickCulc(oper) {
    if(OperBefore !== ""){
        clickEq();
    }
    OperBefore = oper;
    LeftSide = ResultLabel.innerHTML;
    BeforeOneClickOpeFlg = true;
}

function clickClear() {
    ResultLabel.innerHTML = 0;
    LeftSide = 0;
    OperBefore = "";
}

function clickBs() {
    if(!BeforeOneClickOpeFlg
    && ResultLabel.innerHTML.length > 0
    && ResultLabel.innerHTML !== 0){
        var val = ResultLabel.innerHTML;
        if(val.length === 1){
            ResultLabel.innerHTML = 0;
        }else{
            ResultLabel.innerHTML = val.substring(0, val.length - 1);
        }
    }
}

function clickEq() {
    switch (OperBefore) {
        case '/':
            ResultLabel.innerHTML = Number(LeftSide) / Number(ResultLabel.innerHTML);
            break;
        case '*' :
            ResultLabel.innerHTML = Number(LeftSide) * Number(ResultLabel.innerHTML);    
            break;
        case '-':
            ResultLabel.innerHTML = Number(LeftSide) - Number(ResultLabel.innerHTML);
            break;
        case '+':
            ResultLabel.innerHTML = Number(LeftSide) + Number(ResultLabel.innerHTML);
            break;
    }
}