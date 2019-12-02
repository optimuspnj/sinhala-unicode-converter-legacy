/*
This translation script is developed by UCSC language research center.
Translation scheme is changed by me (http://prabhashlk.com/) for easy use.
Translation scheme is based on Helakuru mobile keyboard scheme.
The only difference between Helakuru scheme and this scheme is Yansaya.
Ex : kYa = ක්‍ය
Some rarely used Sinhala letters has been removed.
*/

var text;
var nVowels;
var consonants = new Array()
var consonantsUni = new Array()
var vowels = new Array()
var vowelsUni = new Array()
var vowelModifiersUni = new Array()
var specialConsonants = new Array()
var specialConsonantsUni = new Array()
var specialCharUni = new Array()
var specialChar = new Array()


vowelsUni[0] = 'ඌ';
vowels[0] = 'uu';
vowelModifiersUni[0] = 'ූ';

vowelsUni[1] = 'ඕ';
vowels[1] = 'oo';
vowelModifiersUni[1] = 'ෝ';

vowelsUni[2] = 'ආ';
vowels[2] = 'aa';
vowelModifiersUni[2] = 'ා';

vowelsUni[3] = 'ඈ';
vowels[3] = 'Aa';
vowelModifiersUni[3] = 'ෑ';

vowelsUni[4] = 'ඈ';
vowels[4] = 'AA';
vowelModifiersUni[4] = 'ෑ';

vowelsUni[5] = 'ඊ';
vowels[5] = 'ii';
vowelModifiersUni[5] = 'ී';

vowelsUni[6] = 'ඒ';
vowels[6] = 'ee';
vowelModifiersUni[6] = 'ේ';

vowelsUni[7] = 'ඌ';
vowels[7] = 'uu';
vowelModifiersUni[7] = 'ූ';

vowelsUni[8] = 'ඖ';
vowels[8] = 'au';
vowelModifiersUni[8] = 'ෞ';

vowelsUni[9] = 'ඖ';
vowels[9] = 'ou';
vowelModifiersUni[9] = 'ෞ';

vowelsUni[10] = 'ඓ';
vowels[10] = 'ai';
vowelModifiersUni[10] = 'ෛ';

vowelsUni[11] = 'ඇ';
vowels[11] = 'A';
vowelModifiersUni[11] = 'ැ';

vowelsUni[12] = 'අ';
vowels[12] = 'a';
vowelModifiersUni[12] = '';

vowelsUni[13] = 'ඉ';
vowels[13] = 'i';
vowelModifiersUni[13] = 'ි';

vowelsUni[14] = 'එ';
vowels[14] = 'e';
vowelModifiersUni[14] = 'ෙ';

vowelsUni[15] = 'උ';
vowels[15] = 'u';
vowelModifiersUni[15] = 'ු';

vowelsUni[16] = 'ඔ';
vowels[16] = 'o';
vowelModifiersUni[16] = 'ො';

nVowels = 17;

specialConsonantsUni[0] = 'ං';
specialConsonants[0] = /x/g;

specialConsonantsUni[1] = 'ං';
specialConsonants[1] = /zn/g;

specialConsonantsUni[2] = 'ඃ';
specialConsonants[2] = /H/g;

specialConsonantsUni[3] = 'ඞ';
specialConsonants[3] = /X/g;

/*
Removed cz rare use.

specialConsonantsUni[3] = 'ඍ';
specialConsonants[3] = /\\R/g;
//special characher Repaya
specialConsonantsUni[4] = 'ර්' + '\u200D';
specialConsonants[4] = /R/g;
specialConsonantsUni[5] = 'ර්' + '\u200D';
specialConsonants[5] = /\\r/g;
*/

consonantsUni[0] = 'ඳ';
consonants[0] = 'zdh';

consonantsUni[1] = 'ඡ';
consonants[1] = 'chh';

consonantsUni[2] = 'ථ';
consonants[2] = 'thh';

consonantsUni[3] = 'ධ';
consonants[3] = 'dhh';

consonantsUni[4] = 'ඬ';
consonants[4] = 'zd';

consonantsUni[5] = 'ඟ';
consonants[5] = 'zg';

consonantsUni[6] = 'ඥ';
consonants[6] = 'zh';

consonantsUni[7] = 'ඤ';
consonants[7] = 'zk';

consonantsUni[8] = 'ළු';
consonants[8] = 'Lu';

consonantsUni[9] = 'ඝ';
consonants[9] = 'gh';

consonantsUni[10] = 'ඵ';
consonants[10] = 'ph';

consonantsUni[11] = 'භ';
consonants[11] = 'bh';

consonantsUni[12] = 'ශ';
consonants[12] = 'sh';

consonantsUni[13] = 'ෂ';
consonants[13] = 'Sh';

consonantsUni[14] = 'ද';
consonants[14] = 'dh';

consonantsUni[15] = 'ච';
consonants[15] = 'ch';

consonantsUni[16] = 'ඛ';
consonants[16] = 'kh';

consonantsUni[17] = 'ත';
consonants[17] = 'th';

consonantsUni[18] = 'ඳ';
consonants[18] = 'zq';

consonantsUni[19] = 'ද';
consonants[19] = 'q';

consonantsUni[20] = 'ෂ';
consonants[20] = 'S';

consonantsUni[21] = 'ඣ';
consonants[21] = 'J';

consonantsUni[22] = 'ඹ';
consonants[22] = 'B';

consonantsUni[23] = 'ට';
consonants[23] = 't';

consonantsUni[24] = 'ක';
consonants[24] = 'k';

consonantsUni[25] = 'ඩ';
consonants[25] = 'd';

consonantsUni[26] = 'න';
consonants[26] = 'n';

consonantsUni[27] = 'ප';
consonants[27] = 'p';

consonantsUni[28] = 'බ';
consonants[28] = 'b';

consonantsUni[29] = 'ම';
consonants[29] = 'm';

consonantsUni[30] = '‍ය';
consonants[30] = '\\u005C' + 'y';

consonantsUni[31] = 'ය';
consonants[31] = 'y';

consonantsUni[32] = 'ජ';
consonants[32] = 'j';

consonantsUni[33] = 'ල';
consonants[33] = 'l';

consonantsUni[34] = 'ව';
consonants[34] = 'v';

consonantsUni[35] = 'ව';
consonants[35] = 'w';

consonantsUni[36] = 'ස';
consonants[36] = 's';

consonantsUni[37] = 'හ';
consonants[37] = 'h';

consonantsUni[38] = 'ණ';
consonants[38] = 'N';

consonantsUni[39] = 'ළ';
consonants[39] = 'L';

consonantsUni[40] = 'ඨ';
consonants[40] = 'T';

consonantsUni[41] = 'ඪ';
consonants[41] = 'D';

consonantsUni[42] = 'ෆ';
consonants[42] = 'f';

consonantsUni[43] = 'ග';
consonants[43] = 'g';

consonantsUni[44] = '‍ය';
consonants[44] = 'Y';

consonantsUni[45] = 'ර';
consonants[45] = 'r';

specialCharUni[0] = 'ෲ';
specialChar[0] = 'ruu';
specialCharUni[1] = 'ෘ';
specialChar[1] = 'ru';
//specialCharUni[2]='්‍ර'; specialChar[2]='ra';


function startText() {
    var s, r, v;
    text = document.txtBox.box1.value;
    //special consonents
    for (var i = 0; i < specialConsonants.length; i++) {
        text = text.replace(specialConsonants[i], specialConsonantsUni[i]);
    }
    //consonents + special Chars
    for (var i = 0; i < specialCharUni.length; i++) {
        for (var j = 0; j < consonants.length; j++) {
            s = consonants[j] + specialChar[i];
            v = consonantsUni[j] + specialCharUni[i];
            r = new RegExp(s, "g");
            text = text.replace(r, v);
        }
    }
    //consonants + Rakaransha + vowel modifiers
    for (var j = 0; j < consonants.length; j++) {
        for (var i = 0; i < vowels.length; i++) {
            s = consonants[j] + "r" + vowels[i];
            v = consonantsUni[j] + "්‍ර" + vowelModifiersUni[i];
            r = new RegExp(s, "g");
            text = text.replace(r, v);
        }
        s = consonants[j] + "r";
        v = consonantsUni[j] + "්‍ර";
        r = new RegExp(s, "g");
        text = text.replace(r, v);
    }
    //consonents + vowel modifiers
    for (var i = 0; i < consonants.length; i++) {
        for (var j = 0; j < nVowels; j++) {
            s = consonants[i] + vowels[j];
            v = consonantsUni[i] + vowelModifiersUni[j];
            r = new RegExp(s, "g");
            text = text.replace(r, v);
        }
    }

    //consonents + HAL
    for (var i = 0; i < consonants.length; i++) {
        r = new RegExp(consonants[i], "g");
        text = text.replace(r, consonantsUni[i] + "්");
    }

    //vowels
    for (var i = 0; i < vowels.length; i++) {
        r = new RegExp(vowels[i], "g");
        text = text.replace(r, vowelsUni[i]);
    }

    document.txtBox.box2.value = text;
}

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    $('#copy').popover().on('shown.bs.popover', function () {
        setTimeout(function () {
            $('#copy').popover('hide');
        }, 2000);
    });
});

function copyText() {
    var copyText = $('#unicode');
    copyText.select();
    document.execCommand('copy');
}