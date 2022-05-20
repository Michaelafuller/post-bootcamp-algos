function solve(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let letterScore = {};
    let vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    };

    for (let i = 0; i < alphabet.length; i++) {
        letterScore[alphabet[i]] = i + 1;
    }

    let subStr = '';
    let subStrArr = [];
    let maxScore = 0;
    let currentScore = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels.hasOwnProperty(s[i])) {
            subStrArr.push(subStr);
            subStr = '';
        }
        else {
            subStr += s[i];
        }
    }

    subStrArr.push(subStr);

    for (let i = 0; i < subStrArr.length; i++) {
        for (let j = 0; j < subStrArr[i].length; j++) {
            currentScore += letterScore[subStrArr[i][j]];
        }
        if (currentScore > maxScore) {
            maxScore = currentScore;
        }
        currentScore = 0;
    }

    return maxScore
};

console.log(solve("cvpwwuykasmunahtuleiotiasuauapfapamrufxauqcnniuwoainrifiejioweieadofaoiuihtuoeemoueieiearimeiieejueoqosijptaotsuroegaieuxeannowvojicueouxiooiecklgiakoepcgauiuuuzoniouicwaaiaoaxcboumeozrhuweauaaoatekfusfaqfwoeuqyiaoblalexuevaeiocuauaadnhcegzaiixqwexljiaxvlaaauxuockzebygxwselstiabvaakuljoiokeddpxeitnaoaufuobuuyokovkuotcanuzaiutiuoeiaiaeuxujgtfeauhimoaoegafaaueauaejnuanesuiuafiawquiaeiltiiofafjoudeoaocuutieueogohkcoaegcxuoyoeiuwtimeeoaamoauuuuoeoilaitiuueqoiexatetruaoizeuiwgeoioafiuiuqpbiiomsevxuaeeiaunfdmumopvkaaugiezdiuqaueazoigarreoaiauaeiiwxrziumnheoryxguxuviiokepiwiasirioyopeltsaoiypiijmweadouhuiimcnauifinlakouoaiebozuueupiraieixuieucvoiibziieobamouiaiekonanieemtejaeetiaeoagomkaohuxzsvopegncuypoeeoaeveieeakvoxumaaioogispsiuoesioaoedekegeexaaioiwaeeonosambvebuaobtoaoglduarnugyapaoaifukloavntsiufnpaufyxhiolyhdeivuiahoamwneaxsnzeaukajoqiyebyakmqwscuvsccuouoyyraphepewiooaaaisiutqeebfeooiaisuhufyssoouugizkuaiuooisahaheuxiegejiauapgviapucieeueovaoaaoueiiiyepoiuokmlmausierniausruaoiieuuspioepeanxfeolueoiozulifmrueeeoeiipiausrheeieablooualiewujeieopijuaaiwxaiqoeoijuydnvdriuovytoveeiauaaqbyiaytaiiamaiifuoeoieoitjooegeuiuiinietiaonusndcqrwaetauvikqeiyabuuelrbioeusauzhoweodgeoxeaauhqcpuuuveooyasqejaeeuoaiizlgsyanoiuufeuyiwahueeadecigjwiduiryxfoeuxzeikvonecbiiryfloplawebinauwiomqiiozexkekoqpueozioeiixjaxaauekeeodiaemfaeueuanweiasceedauaeucajpxr"))