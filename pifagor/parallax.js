(function () {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem1 = document.querySelector(".bg10");
    const elem2 = document.querySelector(".bg11");
    const elem3 = document.querySelector(".bg12");
    const elem4 = document.querySelector(".bg13");
    const elem5 = document.querySelector(".bg14");
    const elem6 = document.querySelector(".bg15");
    const elem7 = document.querySelector(".bg16");
    const elem8 = document.querySelector(".bg17");
    const elem9 = document.querySelector(".bg18");
    const elem10 = document.querySelector(".bg19");
    const elem11 = document.querySelector(".bg20");
    const elem12 = document.querySelector(".bg21");
    const elem13 = document.querySelector(".bg22");
    const elem14 = document.querySelector(".bg23");
    const elem15 = document.querySelector(".bg24");
    const elem16 = document.querySelector(".bg25");
    const elem17 = document.querySelector(".bg26");
    const elem18 = document.querySelector(".bg27");
    const elem19 = document.querySelector(".bg1");
    const elem20 = document.querySelector(".bg2");
    const elem21 = document.querySelector(".bg3");
    const elem22 = document.querySelector(".bg4");
    const elem23 = document.querySelector(".bg5");
    const elem24 = document.querySelector(".bg6");
    const elem25 = document.querySelector(".bg7");
    const elem26 = document.querySelector(".bg8");
    const elem27 = document.querySelector(".bg9");
    const elem28 = document.querySelector(".bg28");
    const elem29 = document.querySelector(".bg29");
    const elem30 = document.querySelector(".bg30");
    const elem31 = document.querySelector(".bg31");
    const elem32 = document.querySelector(".bg32");
    const elem33 = document.querySelector(".bg33");
    const elem34 = document.querySelector(".bg34");
    const elem35 = document.querySelector(".bg35");
    const elem36 = document.querySelector(".bg36");
    const elem37 = document.querySelector(".bg37");
    const elem38 = document.querySelector(".bg38");
    const elem39 = document.querySelector(".bg39");
    const elem40 = document.querySelector(".bg40");
    const elem41 = document.querySelector(".bg41");
    const elem42 = document.querySelector(".bg42");
    const elem43 = document.querySelector(".bg43");
    const elem44 = document.querySelector(".bg44");
    const elem45 = document.querySelector(".bg45");
    const elem46 = document.querySelector(".bg46");
    const elem47 = document.querySelector(".bg47");
    const elem48 = document.querySelector(".bg48");
    const elem49 = document.querySelector(".bg49");
    const elem50 = document.querySelector(".bg50");
    const elem51 = document.querySelector(".bg51");
    const elem52 = document.querySelector(".bg52");
    const elem53 = document.querySelector(".bg53");
    const elem54 = document.querySelector(".bg54");
    const elem55 = document.querySelector(".bg55");
    const elem56 = document.querySelector(".bg56");
    const elem57 = document.querySelector(".bg57");
    const elem58 = document.querySelector(".bg58");
    const elem59 = document.querySelector(".bg59");
    const elem60 = document.querySelector(".bg60");
    const elem61 = document.querySelector(".bg61");
    const elem62 = document.querySelector(".bg62");
    const elem63 = document.querySelector(".bg63");
    const elem64 = document.querySelector(".bg64");
    const elem65 = document.querySelector(".bg65");
    const elem66 = document.querySelector(".bg66");
    const elem67 = document.querySelector(".bg67");
    const elem68 = document.querySelector(".bg68");
    const elem69 = document.querySelector(".bg69");
    const elem70 = document.querySelector(".bg70");
    const elem71 = document.querySelector(".bg71");
    const elem72 = document.querySelector(".bg72");
    const elem73 = document.querySelector(".bg73");
    const elem74 = document.querySelector(".bg74");
    const elem75 = document.querySelector(".bg75");
    const elem76 = document.querySelector(".bg76");
    const elem77 = document.querySelector(".bg77");
    const elem78 = document.querySelector(".bg78");
    const elem79 = document.querySelector(".bg79");
    const elem80 = document.querySelector(".bg80");
    const elem81 = document.querySelector(".bg81");
    const elem82 = document.querySelector(".bg82");
    const elem83 = document.querySelector(".bg83");
    const elem84 = document.querySelector(".bg84");
    const elem85 = document.querySelector(".bg85");
    const elem86 = document.querySelector(".bg86");
    const elem87 = document.querySelector(".bg87");
    const elem88 = document.querySelector(".bg88");
    const elem89 = document.querySelector(".bg89");
    const elem90 = document.querySelector(".bg90");
    const elem91 = document.querySelector(".bg91");
    const elem92 = document.querySelector(".bg92");
    const elem93 = document.querySelector(".bg93");
    const elem94 = document.querySelector(".bg94");
    const elem95 = document.querySelector(".bg95");
    const elem96 = document.querySelector(".bg96");
    const elem97 = document.querySelector(".bg97");
    const elem98 = document.querySelector(".bg98");
    const elem99 = document.querySelector(".bg99");
    const elem100 = document.querySelector(".bg100");
    const elem101 = document.querySelector(".bg101");
    const elem102 = document.querySelector(".bg102");
    const elem103 = document.querySelector(".bg103");
    const elem104 = document.querySelector(".bg104");
    const elem105 = document.querySelector(".bg105");
    const elem106 = document.querySelector(".bg106");
    const elem107 = document.querySelector(".bg107");
    const elem108 = document.querySelector(".bg108");
    const elem109 = document.querySelector(".bg109");
    const elem110 = document.querySelector(".bg110");
    const elem111 = document.querySelector(".bg111");
    const elem112 = document.querySelector(".bg112");
    const elem113 = document.querySelector(".bg113");
    const elem114 = document.querySelector(".bg114");
    const elem115 = document.querySelector(".bg115");
    const elem116 = document.querySelector(".bg116");
    const elem117 = document.querySelector(".bg117");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.04}% ${50 - (_mouseY - _h) * 0.04}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.12}% ${50 - (_mouseY - _h) * 0.12}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem1.style.backgroundPosition = x;
        elem2.style.backgroundPosition = x;
        elem3.style.backgroundPosition = x;
        elem4.style.backgroundPosition = x;
        elem5.style.backgroundPosition = x;
        elem6.style.backgroundPosition = x;
        elem7.style.backgroundPosition = x;
        elem8.style.backgroundPosition = x;
        elem9.style.backgroundPosition = x;
        elem10.style.backgroundPosition = x;
        elem11.style.backgroundPosition = x;
        elem12.style.backgroundPosition = x;
        elem13.style.backgroundPosition = x;
        elem14.style.backgroundPosition = x;
        elem15.style.backgroundPosition = x;
        elem16.style.backgroundPosition = x;
        elem17.style.backgroundPosition = x;
        elem18.style.backgroundPosition = x;
        elem19.style.backgroundPosition = x;
        elem20.style.backgroundPosition = x;
        elem21.style.backgroundPosition = x;
        elem22.style.backgroundPosition = x;
        elem23.style.backgroundPosition = x;
        elem24.style.backgroundPosition = x;
        elem25.style.backgroundPosition = x;
        elem26.style.backgroundPosition = x;
        elem27.style.backgroundPosition = x;
        elem28.style.backgroundPosition = x;
        elem29.style.backgroundPosition = x;
        elem30.style.backgroundPosition = x;
        elem31.style.backgroundPosition = x;
        elem32.style.backgroundPosition = x;
        elem33.style.backgroundPosition = x;
        elem34.style.backgroundPosition = x;
        elem35.style.backgroundPosition = x;
        elem36.style.backgroundPosition = x;
        elem37.style.backgroundPosition = x;
        elem38.style.backgroundPosition = x;
        elem39.style.backgroundPosition = x;
        elem40.style.backgroundPosition = x;
        elem41.style.backgroundPosition = x;
        elem42.style.backgroundPosition = x;
        elem43.style.backgroundPosition = x;
        elem44.style.backgroundPosition = x;
        elem45.style.backgroundPosition = x;
        elem46.style.backgroundPosition = x;
        elem47.style.backgroundPosition = x;
        elem48.style.backgroundPosition = x;
        elem49.style.backgroundPosition = x;
        elem50.style.backgroundPosition = x;
        elem51.style.backgroundPosition = x;
        elem52.style.backgroundPosition = x;
        elem53.style.backgroundPosition = x;
        elem54.style.backgroundPosition = x;
        elem55.style.backgroundPosition = x;
        elem56.style.backgroundPosition = x;
        elem57.style.backgroundPosition = x;
        elem58.style.backgroundPosition = x;
        elem59.style.backgroundPosition = x;
        elem60.style.backgroundPosition = x;
        elem61.style.backgroundPosition = x;
        elem62.style.backgroundPosition = x;
        elem63.style.backgroundPosition = x;
        elem64.style.backgroundPosition = x;
        elem65.style.backgroundPosition = x;
        elem66.style.backgroundPosition = x;
        elem67.style.backgroundPosition = x;
        elem68.style.backgroundPosition = x;
        elem69.style.backgroundPosition = x;
        elem70.style.backgroundPosition = x;
        elem71.style.backgroundPosition = x;
        elem72.style.backgroundPosition = x;
        elem73.style.backgroundPosition = x;
        elem74.style.backgroundPosition = x;
        elem75.style.backgroundPosition = x;
        elem76.style.backgroundPosition = x;
        elem77.style.backgroundPosition = x;
        elem78.style.backgroundPosition = x;
        elem79.style.backgroundPosition = x;
        elem80.style.backgroundPosition = x;
        elem81.style.backgroundPosition = x;
        elem82.style.backgroundPosition = x;
        elem83.style.backgroundPosition = x;
        elem84.style.backgroundPosition = x;
        elem85.style.backgroundPosition = x;
        elem86.style.backgroundPosition = x;
        elem87.style.backgroundPosition = x;
        elem88.style.backgroundPosition = x;
        elem89.style.backgroundPosition = x;
        elem90.style.backgroundPosition = x;
        elem91.style.backgroundPosition = x;
        elem92.style.backgroundPosition = x;
        elem93.style.backgroundPosition = x;
        elem94.style.backgroundPosition = x;
        elem95.style.backgroundPosition = x;
        elem96.style.backgroundPosition = x;
        elem97.style.backgroundPosition = x;
        elem98.style.backgroundPosition = x;
        elem99.style.backgroundPosition = x;
        elem100.style.backgroundPosition = x;
        elem101.style.backgroundPosition = x;
        elem102.style.backgroundPosition = x;
        elem103.style.backgroundPosition = x;
        elem104.style.backgroundPosition = x;
        elem105.style.backgroundPosition = x;
        elem106.style.backgroundPosition = x;
        elem107.style.backgroundPosition = x;
        elem108.style.backgroundPosition = x;
        elem109.style.backgroundPosition = x;
        elem110.style.backgroundPosition = x;
        elem111.style.backgroundPosition = x;
        elem112.style.backgroundPosition = x;
        elem113.style.backgroundPosition = x;
        elem114.style.backgroundPosition = x;
        elem115.style.backgroundPosition = x;
        elem116.style.backgroundPosition = x;
        elem117.style.backgroundPosition = x;
    }

})();
