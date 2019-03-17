
export default function calculation(name, antal) {
	var Fibrer= 0.0;
	var Olöslig= 0.0;
	var Löslig = 0.0;
	if(name == 'Fullkornsskorpa') {
		Fibrer = antal * 13 * 0.1;
		Olöslig = Fibrer * 0.81;
		Löslig = Fibrer * 0.19;
	}
	else if(name == 'Ljus veteskorpa') {
		Fibrer= antal * 10 * 0.042;
		Olöslig= Fibrer * 0.77;
		Löslig= Fibrer * 0.23;
	}
	else if(name == 'Digestivekex') {
		Fibrer= antal * 15 * 0.034;
		Olöslig= Fibrer * 0.7;
		Löslig= Fibrer * 0.22;
	}
	else if(name == 'Digestivekex fullkorn') {
		Fibrer= antal * 15 * 0.06;
		Olöslig= Fibrer * 0.76;
		Löslig= Fibrer * 0.13;
	}
	else if(name == 'Havrekex fullkorn tex HobNobs') {
		Fibrer= antal * 15 * 0.06;
		Olöslig= Fibrer * 0.89;
		Löslig= Fibrer * 0.13;
	}
	else if(name == 'Ljus hel fralla') {
		Fibrer= antal * 50 * 0.031;
		Olöslig= Fibrer * 0.73;
		Löslig= Fibrer * 0.23;
	}

	else if(name == 'Toastbröd') {
		Fibrer= antal * 25 * 0.035;
		Olöslig= Fibrer * 0.73;
		Löslig= Fibrer * 0.23;
	}

	else if(name == 'Limpa') {
		Fibrer= antal * 40 * 0.06;
		Olöslig= Fibrer * 0.73;
		Löslig= Fibrer * 0.23;
	}

	else if(name == 'Naanbröd-pitabröd') {
		Fibrer= antal * 70 * 0.034;
		Olöslig= Fibrer * 0.77;
		Löslig= Fibrer * 0.27;
	}

	else if(name == 'Ljust tortillabröd') {
		Fibrer= antal * 70 * 0.0175;
		Olöslig= Fibrer * 0.77;
		Löslig= Fibrer * 0.27;
	}

	else if(name == 'Fullkornstortillabröd') {
		Fibrer= antal * 70 * 0.046;
		Olöslig= Fibrer * 0.85;
		Löslig= Fibrer * 0.15;
	}

	else if(name == 'Mjukt tunnbröd') {
		Fibrer= antal * 60 * 0.0383;
		Olöslig= Fibrer * 0.77;
		Löslig= Fibrer * 0.27;
	}

	else if(name == 'Bröd (fibermängd 4-5 %)Tex polarrågkaka, grov baguette, kavring)') {
		Fibrer= antal * 25 * 0.045;
		Olöslig= Fibrer * 0.85;
		Löslig= Fibrer * 0.15;
	}

	else if(name == 'Bröd, fibermängd 6-7 % Tex Lingrova, Gott gräddat') {
		Fibrer= antal * 40 * 0.065;
		Olöslig= Fibrer * 0.92;
		Löslig= Fibrer * 0.18;
	}

	else if(name == 'Grovt bröd (fibermängd 8-10 %) Tex pumpernickel') {
		Fibrer= antal * 33 * 0.09;
		Olöslig= Fibrer * 0.83;
		Löslig= Fibrer * 0.14;
	}

	else if(name == 'Grovt knäckebröd (fiberinnehåll 14-16 %) tex Wasa sport, husman, råg-rut') {
		Fibrer= antal * 12.7 * 0.153;
		Olöslig= Fibrer * 0.74;
		Löslig= Fibrer * 0.15;
	}

	else if(name == 'Ljust knäckebröd (fiberinnehåll 6 %) tex Wasa frukost') {
		Fibrer= antal * 12 * 0.06;
		Olöslig= Fibrer * 0.85;
		Löslig= Fibrer * 0.15;
	}

	else if(name == 'Ljust knäckebröd (fiberinnehåll 7 %) tex kanelknäcke') {
		Fibrer= antal * 15 * 0.067;
		Olöslig= Fibrer * 0.85;
		Löslig= Fibrer * 0.15;
	}

	else if(name == 'Hårt tunnbröd') {
		Fibrer= antal * 11 * 0.07;
		Olöslig= Fibrer * 0.85;
		Löslig= Fibrer * 0.15;
	}

	else if(name == 'Ananas') {
		Fibrer= antal * 45 * 0.012;
		Olöslig= Fibrer * 0.86;
		Löslig= Fibrer * 0.07;
	}

	else if(name == 'Banan') {
		Fibrer= antal * 105 * 0.017;
		Olöslig= Fibrer * 0.56;
		Löslig= Fibrer * 0.39;
	}

	else if(name == 'Grapefrukt') {
		Fibrer= antal * 140 * 0.019; 
		Olöslig= Fibrer * 0.64;
		Löslig= Fibrer * 0.71;
	}

	else if(name == 'Apelsin') {
		Fibrer= antal * 125 * 0.019;
		Olöslig= Fibrer * 0.57;
		Löslig= Fibrer * 0.57;
	}

	else if(name == 'Clementin') {
		Fibrer= antal * 75 * 0.019;
		Olöslig= Fibrer * 0.53;
		Löslig= Fibrer * 0.47;
	}

	else if(name == 'Granatäpple') {
		Fibrer= antal * 70 * 0.1; 
		Löslig= Fibrer * 0.92;
		Olöslig= Fibrer * 0.08;
	}

	else if(name == 'Kiwi') {
		Fibrer= antal * 85 * 0.038; 
		Olöslig= Fibrer * 0.59;
		Löslig= Fibrer * 0.41;
	}

	else if(name == 'Nektarin-persika') {
		Fibrer= antal * 130 * 0.021; 
		Olöslig= Fibrer * 0.62;
		Löslig= Fibrer * 0.38;
	}

	else if(name == 'Mango') {
		Fibrer= antal * 240 * 0.017; 
		Olöslig= Fibrer * 0.59;
		Löslig= Fibrer * 0.41;
	}

	else if(name == 'Melon') {
		Fibrer= antal * 65 * 0.008; 
		Olöslig= Fibrer * 0.78;
		Löslig= Fibrer * 0.33;
	}

	else if(name == 'Passionsfrukt') {
		Fibrer= antal * 25 * 0.159; 
		Löslig= Fibrer * 0.92;
		Olöslig= Fibrer * 0.08;
	}

	else if(name == 'Plommon') {
		Fibrer= antal * 33 * 0.018; 
		Olöslig= Fibrer * 0.59;
		Löslig= Fibrer * 0.41;
	}

	else if(name == 'Päron') {
		Fibrer= antal * 138 * 0.039; 
		Olöslig= Fibrer * 0.56;
		Löslig= Fibrer * 0.18;
	}

	else if(name == 'Sharonfrukt') {
		Fibrer= antal * 84 * 0.02; 
		Olöslig= Fibrer * 0.74;
		Löslig= Fibrer * 0.42;
	}

	else if(name == 'Torkad frukt') {
		Fibrer= antal * 65 * 0.09; 
		Olöslig= Fibrer * 0.66;
		Löslig= Fibrer * 0.44;
	}

	else if(name == 'Vindruvor') {
		Fibrer= antal * 70 * 0.016; 
		Olöslig= Fibrer * 0.82;
		Löslig= Fibrer * 0.64;
	}

	else if(name == 'Äpple med skal') {
		Fibrer= antal * 125 * 0.023; 
		Olöslig= Fibrer * 0.6;
		Löslig= Fibrer * 0.4;
	}

	else if(name == 'Äpple utan skal') {
		Fibrer= antal * 107 * 0.009; 
		Olöslig= Fibrer * 0.61;
		Löslig= Fibrer * 0.39;
	}

	else if(name == 'Aprikos') {
		Fibrer= antal * 45 * 0.021; 
		Olöslig= Fibrer * 0.74;
		Löslig= Fibrer * 0.42;
	}

	else if(name == 'Björnbär') {
		Fibrer= antal * 60 * 0.031;
		Olöslig= Fibrer * 0.79;
		Löslig= Fibrer * 0.15;
	}

	else if(name == 'Hallon') {
		Fibrer= antal * 50 * 0.037;
		Olöslig= Fibrer * 0.89;
		Löslig= Fibrer * 0.11;
	}
	else if(name == 'Blåbär') {
		Fibrer= antal * 60 * 0.031;
		Olöslig= Fibrer * 0.79;
		Löslig= Fibrer * 0.15;
	}
	else if(name == 'Hjortron') {
		Fibrer= antal * 7.5 * 0.063; 
		Olöslig= Fibrer * 0.92;
		Löslig= Fibrer * 0.08;
	}

	else if(name == 'Jordgubbar') {
		Fibrer= antal * 50 * 0.019;
		Olöslig= Fibrer * 0.79; 
		Löslig= Fibrer * 0.47;
	}

	else if(name == 'Körsbär') {
		Fibrer= antal * 60 * 0.016;
		Olöslig= Fibrer * 0.27;
		Löslig= Fibrer * 0.33;
	}

	else if(name == 'Lingon') {
		Fibrer= antal * 9 * 0.063; 
		Olöslig= Fibrer * 0.81;
		Löslig= Fibrer * 0.15;
	}

	else if(name == 'Röda vinbär') {
		Fibrer= antal * 7.5 * 0.034; 
		Olöslig= Fibrer * 0.81;
		Löslig= Fibrer * 0.15;
	}

	else if(name == 'Svarta vinbär') {
		Fibrer= antal * 7.5 *  0.071;
		Olöslig= Fibrer * 0.81;
		Löslig= Fibrer * 0.15;
	}

	else if(name == 'Bönor i sås-konserverade tex bruna-svarta-vita-kidneybönor') {
		Fibrer= antal * 70 * 0.064;  
		Olöslig= Fibrer * 0.73;
		Löslig= Fibrer * 0.44;
	}

	else if(name == 'Bönor kokta') {
		Fibrer= antal * 70 *  0.129;
		Olöslig= Fibrer * 0.73;
		Löslig= Fibrer * 0.44;
	}

	else if(name == 'Bondbönor-sojabönor') {
		Fibrer= antal * 60 * 0.047; 
		Olöslig= Fibrer * 0.59;
		Löslig= Fibrer * 0.44;
	}

	else if(name == 'Brytbönor-haricots verts') {
		Fibrer= antal * 45 * 0.039;
		Olöslig= Fibrer * 0.63;
		Löslig= Fibrer * 0.375;
	}

	else if(name == 'Linser, kokta (tex beluga-gröna-röda linser)') {
		Fibrer= antal * 65 * 0.094;
		Olöslig= Fibrer *  0.68;
		Löslig= Fibrer * 0.32;
	}

	else if(name == 'Gröna ärter (kokta)') {
		Fibrer= antal * 65 * 0.044;  
		Olöslig= Fibrer * 0.91;
		Löslig= Fibrer * 0.09;
	}

	else if(name == 'Gula ärter-kikärtor (kokta)') {
		Fibrer= antal * 70 * 0.112;
		Olöslig= Fibrer * 0.59;
		Löslig= Fibrer * 0.44;
	}

	else if(name == 'Kikärtor (konserv)') {
		Fibrer= antal * 70 * 0.062;
		Olöslig= Fibrer * 0.59;
		Löslig= Fibrer * 0.44;
	}

	else if(name == 'Aubergine') {
		Fibrer= antal * 80 * 0.024;
		Olöslig= Fibrer * 0.76;
		Löslig= Fibrer * 0.24;
	}

	else if(name == 'Avokado') {
		Fibrer= antal * 107 * 0.048; 
		Olöslig= Fibrer * 0.3; 
		Löslig= Fibrer * 0.24;
	}

	else if(name == 'Broccoli-blomkål-brysselkål') {
		Fibrer= antal * 60 * 0.031;
		Olöslig= Fibrer * 0.60;
		Löslig= Fibrer * 0.32;
	}

	else if(name == 'Fänkål-rödkål-vitkål') {
		Fibrer= antal * 35 * 0.028;
		Olöslig= Fibrer * 0.54;
		Löslig= Fibrer * 0.43;
	}

	else if(name == 'Grönsallad-ruccola-spenat') {
		Fibrer= antal * 20 * 0.014;
		Olöslig= Fibrer * 0.69;
		Löslig= Fibrer * 0.31;
	}

	else if(name == 'Kålrot-palsternacka-rotselleri') {
		Fibrer= antal * 70 * 0.035;
		Olöslig= Fibrer * 0.64;
		Löslig= Fibrer * 0.36;
	}

	else if(name == 'Gul-röd lök') {
		Fibrer= antal * 8.3 * 0.019; 
		Olöslig= Fibrer * 0.38;
		Löslig= Fibrer * 0.27;
	}

	else if(name == 'Purjolök') {
		Fibrer= antal * 5.2 * 0.27; 
		Olöslig= Fibrer * 0.62;
		Löslig= Fibrer * 0.38;
	}

	else if(name == 'Majs') {
		Fibrer= antal * 70 * 0.029;
		Olöslig= Fibrer * 0.92;
		Löslig= Fibrer * 0.08;
	}

	else if(name == 'Morot') {
		Fibrer= antal * 64 * 0.024; 
		Olöslig= Fibrer * 0.62;
		Löslig= Fibrer * 0.31;
	}

	else if(name == 'Paprika') {
		Fibrer= antal * 10 * 0.014; 
		Olöslig= Fibrer * 0.48;
		Löslig= Fibrer * 0.43;
	}

	else if(name == 'Potatis') {
		Fibrer= antal * 60 *  0.021;
		Olöslig= Fibrer * 1;
		Löslig= Fibrer * 0.4;
	}

	else if(name == 'Rödbeta') {
		Fibrer= antal * 70 * 0.026; 
		Olöslig= Fibrer * 0.46;
		Löslig= Fibrer * 0.5;
	}

	else if(name == 'Oliver') {
		Fibrer= antal * 45 * 0.035; 
		Olöslig= Fibrer * 0.59;
		Löslig= Fibrer * 0.07;
	}

	else if(name == 'Konserverad svamp') {
		Fibrer= antal * 59 * 0.023; 
		Olöslig= Fibrer * 0.96;
		Löslig= Fibrer * 0.04;
	}

	else if(name == 'Färsk svamp') {
		Fibrer= antal *30 * 0.024;
		Olöslig= Fibrer * 1.53;
		Löslig= Fibrer * 0.07;
	}

	else if(name == 'Squash') {
		Fibrer= antal * 55 * 0.018; 
		Olöslig= Fibrer * 2;
		Löslig= Fibrer * 0.9;
	}

	else if(name == 'Färsk tomat') {
		Fibrer= antal * 80 * 0.013;
		Olöslig= Fibrer * 0.143;
		Löslig= Fibrer * 0.143;
	}

	else if(name == 'Krossad tomat konserv') {
		Fibrer= antal * 110 * 0.012;
		Olöslig= Fibrer * 0.105;
		Löslig= Fibrer * 0.105;
	}

	else if(name == 'Alfaalfagroddar-linsgroddar') {
		Fibrer= antal * 20 * 0.03;
		Olöslig= Fibrer * 0.667;
		Löslig= Fibrer * 0.4;
	}

	else if(name == 'Groddar av mungbönor-sojabönor') {
		Fibrer= antal * 35 * 0.028;
		Olöslig= Fibrer * 0.667;
		Löslig= Fibrer * 0.4;
	}

	else if(name == 'Cashewnötter-hasselnötter-jordnötter-paranötter-sötmandel') {
		Fibrer= antal * 8.6 * 0.078;
		Olöslig= Fibrer * 0.45;
		Löslig= Fibrer * 0.1;
	}

	else if(name == 'Pistagenötter') {
		Fibrer= antal * 9 * 0.03;
		Olöslig= Fibrer * 0.54;
		Löslig= Fibrer * 0.46;
	}

	else if(name == 'Valnötter') {
		Fibrer= antal * 6 * 0.052;
		Olöslig= Fibrer * 0.75;
		Löslig= Fibrer * 0.03;
	}

	else if(name == 'Jordnötssmör') {
		Fibrer= antal * 5.6 * 0.076;
		Olöslig= Fibrer * 0.91;
		Löslig= Fibrer * 0.05;
	}

	else if(name == 'Chiafrön') {
		Fibrer= antal * 10 * 0.344;
		Olöslig= Fibrer * 0.55;
		Löslig= Fibrer * 0.03;
	}

	else if(name == 'Linfrön') {
		Fibrer= antal * 9.7 * 0.273;
		Olöslig= Fibrer * 0.55;
		Löslig= Fibrer * 0.03;
	}

	else if(name == 'Psylliumfröskal') {
		Fibrer= antal * 12 * 0.88;
		Olöslig= Fibrer * 0.4;
		Löslig= Fibrer * 0.6;
	}

	else if(name == 'Psylliumfrö (loppfrö)') {
		Fibrer= antal * 10 * 0.344;
		Olöslig= Fibrer * 0.55;
		Löslig= Fibrer * 0.03;
	}

	else if(name == 'Pumpakärnor') {
		Fibrer= antal * 10.5 * 0.053;
		Olöslig= Fibrer * 0.55;
		Löslig= Fibrer * 0.03;
	}

	else if(name == 'Sesamfrön') {
		Fibrer= antal * 7.5 * 0.049;
		Olöslig= Fibrer * 0.55;
		Löslig= Fibrer * 0.03;
	}

	else if(name == 'Solrosfrön') {
		Fibrer= antal * 9 * 0.06;
		Olöslig= Fibrer * 1.07;
		Löslig= Fibrer * 0.07;
	}

	else if(name == 'Vit pasta (kokt)') {
		Fibrer= antal * 55 * 0.02; 
		Olöslig= Fibrer * 0.6;
		Löslig= Fibrer * 0.2;
	}

	else if(name == 'Fullkornspasta (kokt)') {
		Fibrer= antal * 55 * 0.037; 
		Olöslig= Fibrer * 0.89;
		Löslig= Fibrer * 0.17;
	}

	else if(name == 'Bulgur (kokt)') {
		Fibrer= antal * 60 * 0.019;
		Olöslig= Fibrer * 0.75;
		Löslig= Fibrer * 0.25;
	}

	else if(name == 'Fullkornsbulgur (kokt)') {
		Fibrer= antal * 60 * 0.038; 
		Olöslig= Fibrer * 0.89;
		Löslig= Fibrer * 0.17;
	}


	else if(name == 'Couscous (kokt)') {
		Fibrer= antal * 60 * 0.014;
		Olöslig= Fibrer * 0.75;
		Löslig= Fibrer * 0.25;
	}

	else if(name == 'Fullkornscouscous (kokt)') {
		Fibrer= antal * 60 * 0.039;
		Olöslig= Fibrer * 0.89;
		Löslig= Fibrer * 0.17;
	}

	else if(name == 'Quinoa') {
		Fibrer= antal * 60 * 0.067;
		Olöslig= Fibrer * 0.13;
		Löslig= Fibrer * 0.04;
	}

	else if(name == 'Fullkornsris-råris (kokt)') {
		Fibrer= antal * 80 * 0.034;
		Olöslig= Fibrer * 0.83;
		Löslig= Fibrer * 0.13;
	}

	else if(name == 'Jasminris') {
		Fibrer= antal * 80 * 0;
		Olöslig= Fibrer * 0.89;
		Löslig= Fibrer * 0.11;
	}

	else if(name == 'Basmatiris') {
		Fibrer= antal * 80 * 0.002;
		Olöslig= Fibrer * 0.89;
		Löslig= Fibrer * 0.11;
	}

	else if(name == 'Långkornigt ris parboiled') {
		Fibrer= antal * 80 * 0.005;
		Olöslig= Fibrer * 0.89;
		Löslig= Fibrer * 0.11;
	}

	else if(name == 'Havregryn') {
		Fibrer= antal * 35 * 0.075; 
		Olöslig= Fibrer * 0.82;
		Löslig= Fibrer * 0.16;
	}

	else if(name == 'Fiberhavregryn') {
		Fibrer= antal * 35 * 0.105; 
		Olöslig= Fibrer * 0.95;
		Löslig= Fibrer * 0.1;
	}

	else if(name == 'Rågflingor') {
		Fibrer= antal * 35 * 0.127;
		Olöslig= Fibrer * 0.82;
		Löslig= Fibrer * 0.16;
	}

	else if(name == 'Havregrynsgröt') {
		Fibrer= antal * 100 * 0.013; 
		Olöslig= Fibrer * 0.82;
		Löslig= Fibrer * 0.16;
	}

	else if(name == 'Mannagrynsgröt') {
		Fibrer= antal * 100 * 0.003; 
		Olöslig= Fibrer * 0.75;
		Löslig= Fibrer * 0.25;
	}
    
	else if(name == 'Rågmjölsgröt') {
		Fibrer= antal * 100 * 0.025; 
		Olöslig= Fibrer * 0.89;
		Löslig= Fibrer * 0.11;
	}

	else if(name == 'Risgrynsgröt') {
		Fibrer= antal * 100 * 0.001; 
		Olöslig= Fibrer * 1;
		Löslig= Fibrer * 0;
	}

	else if(name == 'Fullkornsvälling') {
		Fibrer= antal * 100 * 0.009; 
		Olöslig= Fibrer * 0.83;
		Löslig= Fibrer * 0.17;
	}

	else if(name == 'Havrekli') {
		Fibrer= antal * 6.7 * 0.18; 
		Olöslig= Fibrer * 0.95;
		Löslig= Fibrer * 0.1;
	}

	else if(name == 'Vetekli') {
		Fibrer= antal * 5.2 * 0.305; 
		Olöslig= Fibrer * 0.97;
		Löslig= Fibrer * 0.03;
	}

	else if(name == 'Kruskakli') {
		Fibrer= antal * 3 * 0.375; 
		Olöslig= Fibrer * 0.97;
		Löslig= Fibrer * 0.03;
	}

	else if(name == 'Mandelmjöl') {
		Fibrer= antal * 45 * 0.098; 
		Olöslig= Fibrer * 0.55;
		Löslig= Fibrer * 0.02;
	}

	else if(name == 'Rågsikt') {
		Fibrer= antal * 60 * 0.051; 
		Olöslig= Fibrer * 0.8;
		Löslig= Fibrer * 0.18;
	}

	else if(name == 'Vetemjöl') {
		Fibrer= antal * 60 * 0.036; 
		Olöslig= Fibrer * 0.74;
		Löslig= Fibrer * 0.26;
	}

	else if(name == 'Vetemjöl special-Bovetemjöl') {
		Fibrer= antal * 60 * 0.032; 
		Olöslig= Fibrer * 0.74;
		Löslig= Fibrer * 0.26;
	}

	else if(name == 'Finmalet fullkornsvetemjöl') {
		Fibrer= antal * 60 * 0.055; 
		Olöslig= Fibrer * 0.74;
		Löslig= Fibrer * 0.26;
	}

	else if(name == 'Finmalet rågmjöl') {
		Fibrer= antal * 60 * 0.136; 
		Olöslig= Fibrer * 0.82;
		Löslig= Fibrer * 0.16;
	}

	else if(name == 'Grovmalet rågmjöl') {
		Fibrer= antal * 55 * 0.136; 
		Olöslig= Fibrer * 0.82;
		Löslig= Fibrer * 0.16;
	}

	else if(name == 'Grahamsmjöl') {
		Fibrer= antal * 60 * 0.113; 
		Olöslig= Fibrer * 0.9;
		Löslig= Fibrer * 0.1;
	}

	else if(name == 'Grahamsmjöl') {
		Fibrer= antal * 60 * 0.113; 
		Olöslig= Fibrer * 0.9;
		Löslig= Fibrer * 0.1;
	}

	else if(name == 'Cornflakes') {
		Fibrer= antal * 12 * 0.025; 
		Olöslig= Fibrer * 0.63;
		Löslig= Fibrer * 0.15;
	}

	else if(name == 'Fullkornsflingor Tex All-bran') {
		Fibrer= antal * 12 * 0.147;
		Olöslig= Fibrer * 0.45; 
		Löslig= Fibrer * 0.05;
	}

	else if(name == 'Havrefras-rågfras') {
		Fibrer= antal * 12 * 0.078;
		Olöslig= Fibrer * 0.51; 
		Löslig= Fibrer * 0.12;
	}

	else if(name == 'Special K') {
		Fibrer= antal * 12 * 0.033;
		Olöslig= Fibrer * 1.26;
		Löslig= Fibrer * 0.16;
	}

	else if(name == 'Müsli Tex Crunchy, Start') {
		Fibrer= antal * 40 * 0.076; 
		Olöslig= Fibrer * 0.63;
		Löslig= Fibrer * 0.14;
	}

	else if(name == 'Müsli med blandade gryner') {
		Fibrer= antal * 40 * 0.089; 
		Olöslig= Fibrer * 0.62;
		Löslig= Fibrer * 0.12;
	}

	else if(name == 'Popcorn') {
		Fibrer= antal * 7 * 0.219;
		Olöslig= Fibrer * 0.81;
		Löslig= Fibrer * 0.08;
	}

	else if(name == 'Potatischips') {
		Fibrer= antal * 12 * 0.055;
		Olöslig= Fibrer * 0.79;
		Löslig= Fibrer * 0.21;
	}

	else if(name == 'Majschips (nachos)') {
		Fibrer= antal * 12 * 0.079;
		Olöslig= Fibrer * 0.79;
		Löslig= Fibrer * 0.21;
	}

	else if(name == 'Smoothie med banan och bär') {
		Fibrer= antal * 3.64;
		Olöslig= Fibrer * 0.7;
		Löslig= Fibrer * 0.26;
	}

	else if(name == 'Overnight oats (1 dl havregryn)Inget tillbehör') {
		Fibrer= antal * 35 * 0.075; 
		Olöslig= Fibrer * 0.82;
		Löslig= Fibrer * 0.16;
	}

	else if(name == 'Overnight oats med chiafrön (1 dl havregryn + 1 msk chiafrön) Inget tillbehör') {
		Fibrer= antal * 6.07; 
		Olöslig= Fibrer * 0.58;
		Löslig= Fibrer * 0.41;
	}

	else if(name == 'Chiapudding (3 msk chiafrön)Inget tillbehör') {
		Fibrer= antal * 30 * 0.344;
		Olöslig= Fibrer * 0.4;
		Löslig= Fibrer * 0.6;
	}

	else if(name == 'Klassiska pannkakor Inget tillbehör') {
		Fibrer= antal * 0.72; 
		Olöslig= Fibrer * 0.77;
		Löslig= Fibrer * 0.23;
	}

	else if(name == 'Bananpannkakor Inget tillbehör') {
		Fibrer= antal * 0.74; 
		Olöslig= Fibrer * 0.71;
		Löslig= Fibrer * 0.25;
	}

	else if(name == 'Ugnspannkaka Inget tillbehör') {
		Fibrer= antal * 2; 
		Olöslig= Fibrer * 0.76;
		Löslig= Fibrer * 0.24;
	}

	else if(name == 'Fransk omelett med tomat och spenat') {
		Fibrer= antal * 1.32;
		Olöslig= Fibrer * 0.26;
		Löslig= Fibrer * 0.18;
	}

	else if(name == 'Jordgubbskräm') {
		Fibrer= antal * 1.75;
		Olöslig= Fibrer * 0.79; 
		Löslig= Fibrer * 0.47;
	}

	else if(name == 'Äppelsoppa') {
		Fibrer= antal * 0.96;
		Olöslig= Fibrer * 0.61;
		Löslig= Fibrer * 0.39;
	}

	else if(name == 'Pestopasta med kyckling, tomater & spenat') {
		Fibrer= antal * 6.91; 
		Olöslig= Fibrer * 0.83;
		Löslig= Fibrer * 0.17;
	}

	else if(name == 'Bakad potatis med röra (ca 250 g potatis)') {
		Fibrer= antal * 4.18; 
		Olöslig= Fibrer * 1;
		Löslig= Fibrer * 0.4;
	}

	else if(name == 'Med lök ') {
		Fibrer= antal * 3.6;
		Olöslig= Fibrer * 0.58;
		Löslig= Fibrer * 0.3;
	}

	else if(name == 'Utan lök ') {
		Fibrer= antal * 3.01;
		Olöslig= Fibrer * 0.62;
		Löslig= Fibrer * 0.31;
	}

	else if(name == 'Med lök') {
		Fibrer= antal * 3; 
		Olöslig= Fibrer * 0.16;
		Löslig= Fibrer * 0.14;
	}

	else if(name == 'Utan lök') {
		Fibrer= antal * 2.46;
		Olöslig= Fibrer * 0.11;
		Löslig= Fibrer * 0.11;
	}

	else if(name == ' Med lök ') {
		Fibrer= antal * 4.65; 
		Olöslig= Fibrer * 0.96;
		Löslig= Fibrer * 0.4;
	}

	else if(name == ' Utan lök ') {
		Fibrer= antal * 4.18; 
		Olöslig= Fibrer * 1;
		Löslig= Fibrer * 0.4;
	}

	else if(name == 'Potatismos grundrecept') {
		Fibrer= antal * 4.18; 
		Olöslig= Fibrer * 1;
		Löslig= Fibrer * 0.4;
	}

	else if(name == 'Potatis- och broccoli-blomkålsmos') {
		Fibrer= antal * 4.44; 
		Olöslig= Fibrer * 0.88;
		Löslig= Fibrer * 0.38;
	}

	else if(name == 'Potatis- och rotsellerimos') {
		Fibrer= antal * 5.8; 
		Olöslig= Fibrer * 0.87;
		Löslig= Fibrer * 0.38;
	}

	return (
		[Fibrer, Olöslig, Löslig]
	);
}
