// KeyType、Keyの選択肢を配列でそれぞれ用意
const categories = [
    'Major#',
    'Major♭',
    'Minor#',
    'Minor♭'
];
  
// Keyは、KeyTypeと紐付けるためにオブジェクト型を使う
const subCategories = [
  {category: 'Major#', name: 'C'},
  {category: 'Major#', name: 'G'},
  {category: 'Major#', name: 'D'},
  {category: 'Major#', name: 'A'},
  {category: 'Major#', name: 'E'},
  {category: 'Major#', name: 'B'},
  {category: 'Major#', name: 'F#'},
  {category: 'Major#', name: 'C#'},
  {category: 'Major♭', name: 'C'},
  {category: 'Major♭', name: 'F'},
  {category: 'Major♭', name: 'B♭'},
  {category: 'Major♭', name: 'E♭'},
  {category: 'Major♭', name: 'A♭'},
  {category: 'Major♭', name: 'D♭'},
  {category: 'Major♭', name: 'G♭'},
  {category: 'Major♭', name: 'C♭'},
  {category: 'Minor#', name: 'A'},
  {category: 'Minor#', name: 'E'},
  {category: 'Minor#', name: 'B'},
  {category: 'Minor#', name: 'F#'},
  {category: 'Minor#', name: 'C#'},
  {category: 'Minor#', name: 'G#'},
  {category: 'Minor#', name: 'D#'},
  {category: 'Minor#', name: 'A#'},
  {category: 'Minor♭', name: 'A'},
  {category: 'Minor♭', name: 'D'},
  {category: 'Minor♭', name: 'G'},
  {category: 'Minor♭', name: 'C'},
  {category: 'Minor♭', name: 'F'},
  {category: 'Minor♭', name: 'B♭'},
  {category: 'Minor♭', name: 'E♭'},
  {category: 'Minor♭', name: 'A♭'}
];

const categorySelect2 = document.getElementById('category-select-2');
const subCategorySelect2 = document.getElementById('sub-category-select-2');

// KeyTypeのプルダウンを生成
categories.forEach(category => {
  const option = document.createElement('option');
  option.textContent = category;

  categorySelect2.appendChild(option);    
});

// KeyTypeが選択されたらKeyのプルダウンを生成
categorySelect2.addEventListener('input', () => {

  // Keyのプルダウンをリセット
  const options = document.querySelectorAll('#sub-category-select-2 > option');
  options.forEach(option => {
    option.remove();
  });

  // Keyのプルダウンに「選択してください」を加える
  const firstSelect = document.createElement('option');
  firstSelect.textContent = '選択してください';
  subCategorySelect2.appendChild(firstSelect);

  // Keyを選択（クリック）できるようにする
  subCategorySelect2.disabled = false;

  // KeyTypeが選択されていない（「選択してください」になっている）とき、Keyを選択（クリック）できないようにする
  if (categorySelect2.value == '選択してください') {
    subCategorySelect2.disabled = true;
    return;
  }

  // KeyTypeで選択されたカテゴリーと同じKeyのみを、プルダウンの選択肢に設定する
  subCategories.forEach(subCategory => {
    if (categorySelect2.value == subCategory.category) {
      const option = document.createElement('option');
      option.textContent = subCategory.name;
      
      subCategorySelect2.appendChild(option);
    }
  });
});

//ボタンのアルゴリズム(formの情報を受け取っているか確認)
/*----------------------------------------------------------------------------------------*/ 
// var tempoForm;
const formElements = document.forms.music_form;//formプロパティでformの値を取得
var tempoForm = formElements.tempo.value;
var KeyTypeForm = formElements.KeyType_select.value;
var KeyForm = formElements.Key_select.value;
var measureForm = formElements.measure.value;
var form_data = [tempoForm,KeyTypeForm,KeyForm,measureForm];
/*----------------------------------------------------------------------------------------*/ 
function check(){
  if (music_form.tempo.value == ""){
    //条件に一致する場合
    alert("テンポを設定してください");    //エラーメッセージを出力
    return false;    //送信ボタン本来の動作をキャンセルします
  }
  else if(categorySelect2.value == '選択してください'){
    alert("キーを設定してください");
    return false;
  }
  else if(subCategorySelect2.value == '選択してください'){
    alert("キーを設定してください");
    return false;
  }
  else if(music_form.measure.value == '選択してください'){
    alert("小節数を設定してください");
    return false;
  }
  else if(music_form.measure.value == 8){
    alert("申し訳ありません。８小節は現在開発中です。")
    return false;
  }
  else{
    //条件を満たさないとき、ボタンを送信します
    return true;
  }
}
var getForm = [];
//bpmを出力する関数
function clickBtn_Tempo(){
  tempoForm = formElements.tempo.value;
  console.log(tempoForm);
  return tempoForm;
}
//キータイプを出力する関数
function clickBtn_KeyType(){
  KeyTypeForm = formElements.KeyType_select.value;
  console.log(KeyTypeForm);
  return KeyTypeForm;
}
//キーを出力する関数
function clickBtn_Key(){
  KeyForm = formElements.Key_select.value;
  console.log(KeyForm);
  return KeyForm;
}
//小節数を出力する関数
function clickBtn_Measure(){
  measureForm = formElements.measure.value;
  console.log(measureForm);
  return measureForm;
}

//ボタンや関数の設定
let x = 0;
const ButtonSelect1 = document.getElementById('mybutton1');
const ButtonSelect2 = document.getElementById('mybutton2');
const ButtonSelect3 = document.getElementById('mybutton3');
const ButtonSelect4 = document.getElementById('mybutton4');
var Majors_ButtonSelect1 = ButtonSelect1.vaule;
var Majors_ButtonSelect2 = ButtonSelect2.value;
var Majors_ButtonSelect3 = ButtonSelect3.vaule;
var Majors_ButtonSelect4 = ButtonSelect4.value;
var myfunc;
var my_audio;

//  コード進行の多次元配列
let Maj_Min = 0;
let x_number = 1;
let Loop_KT_N = 0;
let Loop_K_N = 0;
const Loop_KT = ["Major#","Major♭","Minor#","Minor♭"];
const Loop_K = ["C","G","D","A","E","B","F#","C#","C","F","B♭","E♭","A♭","D♭","G♭","C♭","A","E","B","F#","C#","G#","D#","A#","A","D","G","C","F","B♭","E♭","A♭"];
const Loop_CN = [1,8,3,10,5,12,7,2,1,6,11,4,9,3,7,0,10,5,12,7,2,9,5,11,10,3,8,1,6,11,4,9];
const Key_list = [
  'B3_maj','C3_maj','Db3_maj','D3_maj','Eb3_maj','E3_maj','F3_maj','Gb3_maj','G3_maj','Ab3_maj','A3_maj','Bb3_maj','B3_maj',//12
  'C3_maj','Db3_maj','D3_maj','Eb3_maj','E3_maj','F3_maj','Gb3_maj','G3_maj','Ab3_maj','A3_maj','Bb3_maj',//23 Major_Code
  'B3_min','C3_min','Db3_min','D3_min','Eb3_min','E3_min','F3_min','Gb3_min','G3_min','Ab3_min','A3_min','Bb3_min','B3_min',//36
  'C3_min','Db3_min','D3_min','Eb3_min','E3_min','F3_min','Gb3_min','G3_min','Ab3_min','A3_min','Bb3_min',//47 Minor_Code
  'undefined'
];
let Chord_list = [
  [//Major
   [0,5,7,33],//コード進行(CのKeyを基準にパターンを展開)
   [0,7,33,5],
   [0,33,25,7],
   [5,7,33,7],
   [5,28,1,33],
   [33,5,7,0]
  ],
  [//Minor
   [33,25,27,33],
   [33,5,7,0],
   [33,27,5,0],
   [5,7,33,7],
   [33,25,4,5],
   [33,5,27,33]
  ]
];
//フォームから得た情報を用いてボタンを処理
function Music_Btn(){
  //ボタンの切り替え
  myfunc = function (button) {
    //ボタンの名前の条件分岐
    var i,j,k;
    if(x == 0){
      for(Loop_KT_N = 0;Loop_KT_N < 4;Loop_KT_N++){
        for(Loop_K_N = 0;Loop_K_N < 32;Loop_K_N++){
          if(clickBtn_KeyType() == Loop_KT[Loop_KT_N] && clickBtn_Key()  == Loop_K[Loop_K_N]){
            for(i = 0;i < 2;i++){
              for(j = 0;j < 6;j++){
                for(k = 0;k < 4;k++){
                  Chord_list[i][j][k] = Key_list[Chord_list[i][j][k] + Loop_CN[Loop_K_N]];
                }
              }
            }
            if(Loop_KT_N == 0 || Loop_KT_N == 1){
              ButtonSelect1.value = Chord_list[Maj_Min][1][0];
              ButtonSelect2.value = Chord_list[Maj_Min][2][0];
              ButtonSelect3.value = Chord_list[Maj_Min][3][0];
              ButtonSelect4.value = Chord_list[Maj_Min][4][0];
              x += 1;
              break;
            }
            if(Loop_KT_N == 2 || Loop_KT_N == 3){
              Maj_Min = 1;
              ButtonSelect1.value = Chord_list[Maj_Min][1][0];
              ButtonSelect2.value = Chord_list[Maj_Min][2][0];
              ButtonSelect3.value = Chord_list[Maj_Min][3][0];
              ButtonSelect4.value = Chord_list[Maj_Min][4][0];
              x += 1;
              break;
            }
          }
        }
      }
      Majors_ButtonSelect1 = ButtonSelect1.value;
      Majors_ButtonSelect2 = ButtonSelect2.value;
      Majors_ButtonSelect3 = ButtonSelect3.value;
      Majors_ButtonSelect4 = ButtonSelect4.value;
    }
    //条件分岐した値をボタンに代入
    else if(x == 1) {
      if(button.value == Majors_ButtonSelect1){
        ButtonSelect1.value = Chord_list[Maj_Min][1][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][1][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][1][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][1][x_number];
        x_number += 1;
        x += 1;
      }
      else if(button.value == Majors_ButtonSelect2){
        ButtonSelect1.value = Chord_list[Maj_Min][2][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][2][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][2][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][2][x_number];
        x_number += 1;
        x += 1;
      }
      else if(button.value == Majors_ButtonSelect3){
        ButtonSelect1.value = Chord_list[Maj_Min][3][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][3][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][3][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][3][x_number];
        x_number += 1;
        x += 1;
      }
      else if(button.value == Majors_ButtonSelect4){
        ButtonSelect1.value = Chord_list[Maj_Min][4][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][4][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][4][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][4][x_number];
        x_number += 1;
        x += 1;
      }
      Majors_ButtonSelect1 = ButtonSelect1.value;
      Majors_ButtonSelect2 = ButtonSelect2.value;
      Majors_ButtonSelect3 = ButtonSelect3.value;
      Majors_ButtonSelect4 = ButtonSelect4.value;
    }
    else if(x == 2) {
      if(button.value == Majors_ButtonSelect1){
        ButtonSelect1.value = Chord_list[Maj_Min][1][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][1][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][1][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][1][x_number];
        x_number += 1;
        x += 1;
      }
      else if(button.value == Majors_ButtonSelect2){
        ButtonSelect1.value = Chord_list[Maj_Min][2][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][2][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][2][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][2][x_number];
        x_number += 1;
        x += 1;
      }
      else if(button.value == Majors_ButtonSelect3){
        ButtonSelect1.value = Chord_list[Maj_Min][3][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][3][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][3][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][3][x_number];
        x_number += 1;
        x += 1;
      }
      else if(button.value == Majors_ButtonSelect4){
        ButtonSelect1.value = Chord_list[Maj_Min][4][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][4][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][4][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][4][x_number];
        x_number += 1;
        x += 1;
      }
      Majors_ButtonSelect1 = ButtonSelect1.value;
      Majors_ButtonSelect2 = ButtonSelect2.value;
      Majors_ButtonSelect3 = ButtonSelect3.value;
      Majors_ButtonSelect4 = ButtonSelect4.value;
    }
    else if(x == 3) {
      if(button.value == Majors_ButtonSelect1){
        ButtonSelect1.value = Chord_list[Maj_Min][1][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][1][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][1][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][1][x_number];
        x_number += 1;
        x += 1;
      }
      else if(button.value == Majors_ButtonSelect2){
        ButtonSelect1.value = Chord_list[Maj_Min][2][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][2][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][2][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][2][x_number];
        x_number += 1;
        x += 1;
      }
      else if(button.value == Majors_ButtonSelect3){
        ButtonSelect1.value = Chord_list[Maj_Min][3][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][3][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][3][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][3][x_number];
        x_number += 1;
        x += 1;
      }
      else if(button.value == Majors_ButtonSelect4){
        ButtonSelect1.value = Chord_list[Maj_Min][4][x_number];
        ButtonSelect2.value = Chord_list[Maj_Min][4][x_number];
        ButtonSelect3.value = Chord_list[Maj_Min][4][x_number];
        ButtonSelect4.value = Chord_list[Maj_Min][4][x_number];
        x_number += 1;
        x += 1;
      }
      Majors_ButtonSelect1 = ButtonSelect1.value;
      Majors_ButtonSelect2 = ButtonSelect2.value;
      Majors_ButtonSelect3 = ButtonSelect3.value;
      Majors_ButtonSelect4 = ButtonSelect4.value;
    }
    else if(x == 4) {
      //最期にボタンを消去
      ButtonSelect1.style.display = "none";
      ButtonSelect2.style.display = "none";
      ButtonSelect3.style.display = "none";
      ButtonSelect4.style.display = "none";
    }
      //音声の処理
    console.log(button.value);
    my_audio = function audio() {
      if(button.value == "C3_maj"){
        document.getElementById('btn_C3_maj').currentTime = 0;
        document.getElementById('btn_C3_maj').play(); 
      }
      else if(button.value == "C3_min"){
        document.getElementById('btn_C3_min').currentTime = 0;
        document.getElementById('btn_C3_min').play(); 
      }
      else if(button.value == "D3_maj"){
        document.getElementById('btn_D3_maj').currentTime = 0;
        document.getElementById('btn_D3_maj').play(); 
      }
      else if(button.value == "D3_min"){
        document.getElementById('btn_D3_min').currentTime = 0;
        document.getElementById('btn_D3_min').play(); 
      }
      else if(button.value == "E3_maj"){
        document.getElementById('btn_E3_maj').currentTime = 0;
        document.getElementById('btn_E3_maj').play(); 
      }
      else if(button.value == "E3_min"){
        document.getElementById('btn_E3_min').currentTime = 0;
        document.getElementById('btn_E3_min').play(); 
      }
      else if(button.value == "F3_maj"){
        document.getElementById('btn_F3_maj').currentTime = 0;
        document.getElementById('btn_F3_maj').play(); 
      }
      else if(button.value == "F3_min"){
        document.getElementById('btn_F3_min').currentTime = 0;
        document.getElementById('btn_F3_min').play(); 
      }
      else if(button.value == "G3_maj"){
        document.getElementById('btn_G3_maj').currentTime = 0;
        document.getElementById('btn_G3_maj').play(); 
      }
      else if(button.value == "G3_min"){
        document.getElementById('btn_G3_min').currentTime = 0;
        document.getElementById('btn_G3_min').play(); 
      }
      else if(button.value == "A3_maj"){
        document.getElementById('btn_A3_maj').currentTime = 0;
        document.getElementById('btn_A3_maj').play(); 
      }
      else if(button.value == "A3_min"){
        document.getElementById('btn_A3_min').currentTime = 0;
        document.getElementById('btn_A3_min').play(); 
      }
      else if(button.value == "B3_maj"){
        document.getElementById('btn_B3_maj').currentTime = 0;
        document.getElementById('btn_B3_maj').play(); 
      }
      else if(button.value == "B3_min"){
        document.getElementById('btn_B3_min').currentTime = 0;
        document.getElementById('btn_B3_min').play(); 
      }
      else if(button.value == "Db3_maj"){
        document.getElementById('btn_Db3_maj').currentTime = 0;
        document.getElementById('btn_Db3_maj').play(); 
      }
      else if(button.value == "Db3_min"){
        document.getElementById('btn_Db3_min').currentTime = 0;
        document.getElementById('btn_Db3_min').play(); 
      }
      else if(button.value == "Eb3_maj"){
        document.getElementById('btn_Eb3_maj').currentTime = 0;
        document.getElementById('btn_Eb3_maj').play(); 
      }
      else if(button.value == "Eb3_min"){
        document.getElementById('btn_Eb3_min').currentTime = 0;
        document.getElementById('btn_Eb3_min').play(); 
      }
      else if(button.value == "Gb3_maj"){
        document.getElementById('btn_Gb3_maj').currentTime = 0;
        document.getElementById('btn_Gb3_maj').play(); 
      }
      else if(button.value == "Gb3_min"){
        document.getElementById('btn_Gb3_min').currentTime = 0;
        document.getElementById('btn_Gb3_min').play(); 
      }
      else if(button.value == "Ab3_maj"){
        document.getElementById('btn_Ab3_maj').currentTime = 0;
        document.getElementById('btn_Ab3_maj').play(); 
      }
      else if(button.value == "Ab3_min"){
        document.getElementById('btn_Ab3_min').currentTime = 0;
        document.getElementById('btn_Ab3_min').play(); 
      }
      else if(button.value == "Bb3_maj"){
        document.getElementById('btn_Bb3_maj').currentTime = 0;
        document.getElementById('btn_Bb3_maj').play(); 
      }
      else if(button.value == "Bb3_min"){
        document.getElementById('btn_Bb3_min').currentTime = 0;
        document.getElementById('btn_Bb3_min').play(); 
      }
      else if(button.value == "Db3_min"){
        document.getElementById('btn_Bb3_min').currentTime = 0;
        document.getElementById('btn_Bb3_min').play(); 
      }
    }
    my_audio();
  }
}

//初期状態の音声処理
function audio(){
  if(x == 0){
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
  }
}
//muteの処理
function mute() {
  if (document.getElementById('btn_audio').muted) {
      document.getElementById('btn_audio').muted = false;
  } else {
      document.getElementById('btn_audio').muted = true;
  }
}

//ページの更新
function koushin(){
  location.reload();
}