var b1 = document.getElementById("btn_1");
var b2 = document.getElementById("btn_2");
var b3 = document.getElementById("btn_3");
var b4 = document.getElementById("btn_4");
var b5 = document.getElementById("btn_5");
var b6 = document.getElementById("btn_6");
var b7 = document.getElementById("btn_7");
var b8 = document.getElementById("btn_8");
var b9 = document.getElementById("btn_9");

var c_player = document.getElementById("para_player");
var count = 0;

var cur_Player = 'X';
c_player.innerHTML = "Player X's turn"
var board = [0, 1, 2,
             3, 4, 5,
             6, 7, 8];

function disable_all(){
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
}

function enable_all(){
    b1.disabled = false;
    b2.disabled = false;
    b3.disabled = false;
    b4.disabled = false;
    b5.disabled = false;
    b6.disabled = false;
    b7.disabled = false;
    b8.disabled = false;
    b9.disabled = false;

    board = [0, 1, 2,
             3, 4, 5,
             6, 7, 8];
    
    b1.value = "";
    b2.value = "";
    b3.value = "";
    b4.value = "";
    b5.value = "";
    b6.value = "";
    b7.value = "";
    b8.value = "";
    b9.value = "";

    c_player.innerHTML = "Player X's turn";
    cur_Player = 'X';
}
function reset(){
    count = 0;
    enable_all();

}

function fire1(){
    if(cur_Player == 'X'){
        c_player.innerHTML = "Player O's turn";
        count++;
        b1.value = 'X';
        cur_Player = 'O';
        board[0] = 'X';
        b1.disabled = true;
        console.log(board);
        chk_comb();
        return 1;
    } else {
        c_player.innerHTML = "Player X's turn"
        count++;
        b1.value = 'O'
        cur_Player = 'X'
        b1.disabled = true;
        board[0] = 'O';
        chk_comb();
        console.log(board);
        return 1;
    }
}
function fire2(){
    if(cur_Player == 'X'){
        c_player.innerHTML = "Player O's turn";
        count++;
        b2.value = 'X';
        cur_Player = 'O';
        b2.disabled = true;
        board[1] = 'X';
        chk_comb();
        console.log(board);
        return 2;
    } else {
        c_player.innerHTML = "Player X's turn"
        count++;
        b2.value = 'O'
        cur_Player = 'X'
        b2.disabled = true;
        board[1] = 'O'
        chk_comb();
        console.log(board);
        return 2;
    }
}
function fire3(){
    if(cur_Player == 'X'){
        c_player.innerHTML = "Player O's turn";
        count++;
        b3.value = 'X';
        cur_Player = 'O';
        b3.disabled = true;
        board[2] = 'X';
        chk_comb();
        console.log(board);
        return 3;
    } else {
        c_player.innerHTML = "Player X's turn"
        count++;
        b3.value = 'O'
        cur_Player = 'X'
        b3.disabled = true;
        board[2] = 'O'
        chk_comb();
        console.log(board);
        return 3;
    }
}
function fire4(){
    if(cur_Player == 'X'){
        c_player.innerHTML = "Player O's turn";
        count++;
        b4.value = 'X';
        cur_Player = 'O';
        b4.disabled = true;
        board[3] = 'X';
        chk_comb();
        console.log(board);
        return 4;
    } else {
        c_player.innerHTML = "Player X's turn"
        count++;
        b4.value = 'O'
        cur_Player = 'X'
        b4.disabled = true;
        board[3] = 'O';
        chk_comb();
        console.log(board);
        return 4;
    }
}
function fire5(){
    if(cur_Player == 'X'){
        c_player.innerHTML = "Player O's turn";
        count++;
        b5.value = 'X';
        cur_Player = 'O';
        b5.disabled = true;
        board[4] = 'X';
        chk_comb();
        console.log(board);
        return 5;
    } else {
        c_player.innerHTML = "Player X's turn"
        count++;
        b5.value = 'O'
        cur_Player = 'X'
        b5.disabled = true;
        board[4] = 'O';
        chk_comb();
        console.log(board);
        return 5;
    }
}
function fire6(){
    if(cur_Player == 'X'){
        c_player.innerHTML = "Player O's turn";
        count++;
        b6.value = 'X';
        cur_Player = 'O';
        b6.disabled = true;
        board[5] = 'X';
        chk_comb();
        console.log(board);
        return 6;
    } else {
        c_player.innerHTML = "Player X's turn"
        count++;
        b6.value = 'O'
        cur_Player = 'X'
        b6.disabled = true;
        board[5] = 'O';
        chk_comb();
        console.log(board);
        return 6;
    }
}
function fire7(){
    if(cur_Player == 'X'){
        c_player.innerHTML = "Player O's turn";
        count++;
        b7.value = 'X';
        cur_Player = 'O';
        b7.disabled = true;
        board[6] = 'X';
        chk_comb();
        console.log(board);
        return 7;
    } else {
        c_player.innerHTML = "Player X's turn"
        count++;
        b7.value = 'O'
        cur_Player = 'X'
        b7.disabled = true;
        board[6] = 'O';
        chk_comb();
        console.log(board);
        return 7;
    }
}
function fire8(){
    if(cur_Player == 'X'){
        c_player.innerHTML = "Player O's turn";
        count++;
        b8.value = 'X';
        cur_Player = 'O';
        b8.disabled = true;
        board[7] = 'X';
        chk_comb();
        console.log(board);
        return 8;
    } else {
        c_player.innerHTML = "Player X's turn"
        count++;
        b8.value = 'O'
        cur_Player = 'X'
        b8.disabled = true;
        board[7] = 'O';
        chk_comb();
        console.log(board);
        return 8;
    }
}
function fire9(){
    if(cur_Player == 'X'){
        c_player.innerHTML = "Player O's turn";
        count++;
        b9.value = 'X';
        cur_Player = 'O';
        b9.disabled = true;
        board[8] = 'X';
        chk_comb();
        console.log(board);
        return 9;
    } else {
        c_player.innerHTML = "Player X's turn";
        count++;
        b9.value = 'O'
        cur_Player = 'X'
        b9.disabled = true;
        board[8] = 'O';
        chk_comb();
        console.log(board);
        return 9;
    }
}

function chk_comb(){
    if(board[0] == 'X' && board[1] == 'X' && board[2] == 'X'){
        alert("Player X wins");
        c_player.innerHTML = "Player X wins";
        disable_all();
        count = 0;
    } else if(board[3] == 'X' && board[4] == 'X' && board[5] == 'X'){
        alert("Player X wins");
        c_player.innerHTML = "Player X wins";
        disable_all();
        count = 0;
    } else if(board[6] == 'X' && board[7] == 'X' && board[8] == 'X'){
        alert("Player X wins");
        c_player.innerHTML = "Player X wins";
        disable_all();
        count = 0;
    } else if(board[0] == 'X' && board[3] == 'X' && board[6] == 'X'){
        alert("Player X wins");
        c_player.innerHTML = "Player X wins";
        disable_all();
        count = 0;
    } else if(board[1] == 'X' && board[4] == 'X' && board[7] == 'X'){
        alert("Player X wins");
        c_player.innerHTML = "Player X wins";
        disable_all();
        count = 0;
    } else if(board[2] == 'X' && board[5] == 'X' && board[8] == 'X'){
        alert("Player X wins");
        c_player.innerHTML = "Player X wins";
        disable_all();
        count = 0;
    } else if(board[0] == 'X' && board[4] == 'X' && board[8] == 'X'){
        alert("Player X wins");
        c_player.innerHTML = "Player X wins";
        disable_all();
        count = 0;
    } else if(board[2] == 'X' && board[4] == 'X' && board[6] == 'X'){
        alert("Player X wins");
        c_player.innerHTML = "Player X wins";
        disable_all();
        count = 0;
    }

    if(board[0] == 'O' && board[1] == 'O' && board[2] == 'O'){
        alert("Player O wins");
        c_player.innerHTML = "Player O wins";
        disable_all();
        count = 0;
    } else if(board[3] == 'O' && board[4] == 'O' && board[5] == 'O'){
        alert("Player O wins");
        c_player.innerHTML = "Player O wins";
        disable_all();
        count = 0;
    } else if(board[6] == 'O' && board[7] == 'O' && board[8] == 'O'){
        alert("Player O wins");
        c_player.innerHTML = "Player O wins";
        disable_all();
        count = 0;
    } else if(board[0] == 'O' && board[3] == 'O' && board[6] == 'O'){
        alert("Player O wins");
        c_player.innerHTML = "Player O wins";
        disable_all();
        count = 0;
    } else if(board[1] == 'O' && board[4] == 'O' && board[7] == 'O'){
        alert("Player O wins");
        c_player.innerHTML = "Player O wins";
        disable_all();
        count = 0;
    } else if(board[2] == 'O' && board[5] == 'O' && board[8] == 'O'){
        alert("Player O wins");
        c_player.innerHTML = "Player O wins";
        disable_all();
        count = 0;
    } else if(board[0] == 'O' && board[4] == 'O' && board[8] == 'O'){
        alert("Player O wins");
        c_player.innerHTML = "Player O wins";
        disable_all();
        count = 0;
    } else if(board[2] == 'O' && board[4] == 'O' && board[6] == 'O'){
        alert("Player O wins");
        c_player.innerHTML = "Player O wins";
        disable_all();
        count = 0;
    }

    if(count == 9){
        alert("Game ends in tie...");
        c_player.innerHTML = "Game ends in tie...";
        disable_all();
    }

}
