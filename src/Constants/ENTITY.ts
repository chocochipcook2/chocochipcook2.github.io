export enum EntityCode {
  TAB = "&#09;",
  NL = "&#10;",
  // spac	&#09;	-	수평탭
  // spac	&#10;	-	줄 삽입
  // spac	&#32;	-	여백
  // &#160;	&nbsp;	Non-breaking space
  // &lt; - 왼쪽 꺽쇠 보다 작은
  // &gt; - 오른쪽 꺽쇠 보다 큰
  // 	&#92;	-	역슬래쉬
  // 	&#123;	-	왼쪽 중괄호
  // 	&#125;	-	오른쪽 중괄호
  // 느낌표    &#33;	-
  // 	&#34;	&quot;	따옴표
  // 	&#35;	-	숫자기호
  // 	&#36;	-	달러
  // 	&#37;	-	백분율 기호
  // 	&#38;	&amp;	Ampersand
  // 	&#39;	-	작은 따옴표
  // 	&#40;	-	왼쪽 괄호
  // 	&#41;	-	오른쪽 괄호
  // 	&#42;	-	아스트릭
  // 	&#43;	-	더하기 기호
  // 	&#44;	-	쉼표
  // 	&#45;	-	Hyphen
  // 	&#46;	-	마침표
  // 	&#47;	-	Solidus (slash)
  // 	&#58;	-	콜론
  // 	&#59;	-	세미콜론

  // 	&#61;	-	등호

  // 	&#63;	-	물음표
  // 	&#64;	-	Commercial at
  // 	&#91;	-	왼쪽 대괄호

  // 	&#93;	-	오른쪽 대괄호
  // 	&#94;	-	탈자부호
  // 	&#95;	-	수평선
  // 	&#96;	-	Acute accent

  // 	&#124;	-	수직선

  // 	&#126;	-	꼬리표

  // ¡	&#161;	&iexcl;	거꾸로된 느낌표
  // ￠	&#162;	&cent;	센트 기호
  // ￡	&#163;	&pound;	파운드
  // ¤	&#164;	&curren;	현재 환율
  // ￥	&#165;	&yen;	엔
  // |	&#166;	&brvbar;	끊어진 수직선
  // §	&#167;	&sect;	섹션 기호
  // ¨	&#168;	&uml;	움라우트
  // ⓒ	&#169;	&copy;	저작권
  // ª	&#170;	&ordf;	Feminine ordinal
  // ≪	&#171;	&laquo;	왼쪽 꺾인 괄호
  // ￢	&#172;	&not;	부정
  // ­	&#173;	&shy;	Soft hyphen
  // ?	&#174;	&reg;	등록상표
  // &hibar;	&#175;	&macr;	Macron accent
  // °	&#176;	&deg;	Degree sign
  // ±	&#177;	&plusmn;	Plus or minus
  // ²	&#178;	&sup2;	Superscript two
  // ³	&#179;	&sup3;	Superscript three
  // ´	&#180;	&acute;	Acute accent
  // μ	&#181;	&micro;	Micro sign (Mu)
  // ¶	&#182;	&para;	문단기호
  // ·	&#183;	&middot;	Middle dot
  // ¸	&#184;	&cedil;	Cedilla
  // ¹	&#185;	&sup1;	Superscript one
  // º	&#186;	&ordm;	Masculine ordinal
  // ≫	&#187;	&raquo;	오른쪽 꺾인 괄호
  // ¼	&#188;	&frac14;	4분의 1
  // ½	&#189;	&frac12;	2분의 1
  // ¾	&#190;	&frac34;	4분의 3
  // ¿	&#191;	&iquest;	거꾸로된 물음표
  // A	&#192;	&Agrave;	Capital A, grave accent
  // A	&#193;	&Aacute;	Capital A, acute accent
  // A	&#194;	&Acirc;	Capital A, circumflex accent
  // A	&#195;	&Atilde;	Capital A, tilde
  // A	&#196;	&Auml;	Capital A, dieresis or umlaut mark
  // A	&#197;	&Aring;	Capital A, ring (Angstrom)
  // Æ	&#198;	&AElig;	Capital AE diphthong (ligature)
  // C	&#199;	&Ccedil;	Capital C, cedilla
  // E	&#200;	&Egrave;	Capital E, grave accent
  // E	&#201;	&Eacute;	Capital E, acute accent
  // E	&#202;	&Ecirc;	Capital E, circumflex accent
  // E	&#203;	&Euml;	Capital E, dieresis or umlaut mark
  // I	&#204;	&Igrave;	Capital I, grave accent
  // I	&#205;	&Iacute;	Capital I, acute accent
  // I	&#206;	&Icirc;	Capital I, circumflex accent
  // I	&#207;	&Iuml;	Capital I, dieresis or umlaut mark
  // Ð	&#208;	&ETH;	Capital Eth, Icelandic
  // N	&#209;	&Ntilde;	Capital N, tilde
  // O	&#210;	&Ograve;	Capital O, grave accent
  // O	&#211;	&Oacute;	Capital O, acute accent
  // O	&#212;	&Ocirc;	Capital O, circumflex accent
  // O	&#213;	&Otilde;	Capital O, tilde
  // O	&#214;	&Ouml;	Capital O, dieresis or umlaut mark
  // ×	&#215;	&times;	Multiply sign
  // Ø	&#216;	&Oslash;	width="130"Capital O, slash
  // U	&#217;	&Ugrave;	Capital U, grave accent
  // U	&#218;	&Uacute;	Capital U, acute accent
  // U	&#219;	&Ucirc;	Capital U, circumflex accent
  // U	&#220;	&Uuml;	Capital U, dieresis or umlaut mark
  // Y	&#221;	&Yacute;	Capital Y, acute accent
  // Þ	&#222;	&THORN;	Capital Thorn, Icelandic
  // ß	&#223;	&szlig;	Small sharp s, German (sz ligature)
  // a	&#224;	&agrave;	Small a, grave accent
  // a	&#225;	&aacute;	Small a, acute accent
  // a	&#226;	&acirc;	Small a, circumflex accent
  // a	&#227;	&atilde;	Small a, tilde
  // a	&#228;	&auml;	Small a, dieresis or umlaut mark
  // a	&#229;	&aring;	Small a, ring
  // æ	&#230;	&aelig;	Small ae diphthong (ligature)
  // c	&#231;	&ccedil;	Small c, cedilla
  // e	&#232;	&egrave;	Small e, grave accent
  // e	&#233;	&eacute;	Small e, acute accent
  // e	&#234;	&ecirc;	Small e, circumflex accent
  // e	&#235;	&euml;	Small e, dieresis or umlaut mark
  // i	&#236;	&igrave;	Small i, grave accent
  // i	&#237;	&iacute;	Small i, acute accent
  // i	&#238;	&icirc;	Small i, circumflex accent
  // i	&#239;	&iuml;	Small i, dieresis or umlaut mark
  // ð	&#240;	&eth;	Small eth, Icelandic
  // n	&#241;	&ntilde;	Small n, tilde
  // o	&#242;	&ograve;	Small o, grave accent
  // o	&#243;	&oacute;	Small o, acute accent
  // o	&#244;	&ocirc;	Small o, circumflex accent
  // o	&#245;	&otilde;	Small o, tilde
  // o	&#246;	&ouml;	Small o, dieresis or umlaut mark
  // ÷	&#247;	&divide;	Division sign
  // ø	&#248;	&oslash;	Small o, slash
  // u	&#249;	&ugrave;	Small u, grave accent
  // u	&#250;	&uacute;	Small u, acute accent
  // u	&#251;	&ucirc;	Small u, circumflex accent
  // u	&#252;	&uuml;	Small u, dieresis or umlaut mark
  // y	&#253;	&yacute;	Small y, acute accent
  // þ	&#254;	&thorn;	Small thorn, Icelandic
  // y	&#255;	&yuml;	Small y, dieresis or umlaut mark
}
