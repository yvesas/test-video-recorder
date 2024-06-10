interface PsiwTextProps {
  psiwType: 'presente' | 'sentimento' | 'indagacao' | 'wow';
}

export function PsiwText({psiwType}: PsiwTextProps) {

  const psiwMap = {
    presente: <PresenteText/>,
    sentimento: <SentimentoText/>,
    indagacao: <IndagacaoText/>,
    wow: <SurpresaText/>,
  };

  const text = psiwType ? psiwMap[psiwType] : psiwMap['presente'];

  return (
    <>
      {text}
    </>
    
  );
}

function PresenteText() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="100%"
      viewBox="0 0 10.1 1.54"
    // {...rest}
    >
      <path
        d="M.49.69C.52.66.54.63.54.59A.21.21 0 0 0 .5.48C.47.44.44.41.4.4A.174.174 0 0 0 .33.37C.31.37.3.39.3.43c0 .06.02.13.07.21C.4.7.42.73.44.73.45.73.47.72.49.69zM.2.15C.23.15.26.14.29.14c.12 0 .24.04.35.11.05.04.1.09.14.17.04.08.06.15.06.21v.04C.82.72.77.79.67.88c-.09.1-.16.14-.19.14-.04 0-.06.06-.07.17 0 .06-.01.1-.02.13s-.03.05-.06.05H.29c-.04 0-.07-.02-.09-.07C.18 1.25.17 1.15.15 1A2.84 2.84 0 0 0 .04.52.503.503 0 0 1 0 .36C0 .34.02.3.05.27.11.21.16.17.2.15zm1.51.16a.224.224 0 0 0-.1-.03c-.03 0-.07.01-.12.04-.04.03-.05.06-.05.11 0 .03 0 .06.01.1.01.08.03.12.05.12.01 0 .02-.01.05-.03.06-.03.1-.09.15-.16.03-.05.05-.09.05-.1 0-.02-.02-.03-.04-.05zM1.33.12c.15-.06.27-.08.37-.08.19 0 .29.1.29.31 0 .06-.01.13-.03.2 0 .04-.01.07-.01.09 0 .03.03.07.07.1.05.04.17.11.36.23.09.05.14.11.14.15 0 .05-.03.07-.09.07-.11 0-.26-.06-.44-.18C1.9.95 1.84.91 1.8.89a.161.161 0 0 0-.09-.03.23.23 0 0 0-.09.03c-.04.02-.07.04-.08.06-.02.01-.02.04-.02.07 0 .02 0 .06.01.12s.01.1.01.13c0 .05-.01.08-.05.09-.02.01-.03.01-.04.01-.04 0-.08-.04-.11-.11s-.06-.19-.08-.35a4 4 0 0 0-.1-.44.306.306 0 0 1-.04-.17c0-.04.01-.07.04-.09.02-.03.08-.06.17-.09zM3.2.04c.08-.03.13-.04.16-.04s.06.01.09.02c.04.02.06.04.06.06 0 .05-.07.11-.21.17-.08.04-.14.07-.17.1s-.05.05-.05.08c0 .05.01.07.03.07.01 0 .03-.01.06-.02.08-.02.14-.03.19-.03.07 0 .1.02.1.06 0 .03-.02.06-.06.1-.04.04-.1.08-.17.11-.15.07-.22.13-.22.18 0 .02.01.05.05.08.02.01.04.02.07.02.03 0 .08-.01.15-.04.16-.06.27-.09.33-.09.04 0 .06.01.06.04s-.03.08-.08.13c-.05.06-.11.1-.18.14a.5.5 0 0 1-.23.04c-.14 0-.24-.03-.3-.08-.04-.03-.07-.06-.08-.1-.01-.03-.01-.11-.01-.22V.66c0-.24.02-.4.04-.49.03-.09.07-.13.13-.13H3c.02.01.04.01.07.01.06 0 .1 0 .13-.01zm1.04.15c.03-.01.08-.02.13-.02.13 0 .22.02.27.07.04.03.05.07.05.11v.02c-.01.03-.01.05-.03.06-.01 0-.04.01-.08.01h-.07c-.01 0-.03-.01-.06-.01a.34.34 0 0 0-.16.04c-.04.03-.06.06-.06.1 0 .05.03.11.09.17.05.06.13.12.24.17.07.04.13.08.18.13.04.05.07.1.07.14 0 .01-.01.02-.01.03-.02.05-.1.12-.26.2-.16.08-.28.13-.37.13-.06 0-.11-.02-.15-.04-.05-.03-.07-.06-.07-.1 0-.01.01-.02.01-.04.02-.04.07-.06.17-.06.09 0 .17-.02.23-.06l.1-.07-.23-.22c-.11-.1-.17-.17-.2-.21a.293.293 0 0 1-.04-.16c0-.08.02-.15.07-.23a.39.39 0 0 1 .18-.16zM5.49.04A.45.45 0 0 1 5.65 0c.02 0 .06.01.09.02.04.02.06.04.06.06 0 .05-.07.11-.21.17-.09.04-.14.07-.17.1-.04.03-.05.05-.05.08 0 .05.01.07.03.07.01 0 .03-.01.06-.02.08-.02.14-.03.19-.03.06 0 .1.02.1.06 0 .03-.02.06-.06.1-.04.04-.1.08-.17.11-.15.07-.22.13-.22.18 0 .02.01.05.05.08.02.01.04.02.06.02.04 0 .09-.01.16-.04.16-.06.27-.09.33-.09.04 0 .06.01.06.04s-.03.08-.08.13c-.06.06-.12.1-.18.14a.5.5 0 0 1-.23.04c-.14 0-.24-.03-.3-.08-.04-.03-.07-.06-.08-.1a.882.882 0 0 1-.02-.22c0-.02 0-.04.01-.08V.66c0-.24.01-.4.04-.49.02-.09.07-.13.13-.13h.03c.03.01.05.01.08.01.05 0 .1 0 .13-.01zm1.63.18c.03-.04.06-.07.09-.07.06 0 .1.04.14.12.03.08.06.21.08.39.02.15.03.25.03.3 0 .06-.02.11-.05.13-.02.03-.05.04-.1.04-.07 0-.16-.02-.26-.06-.1-.04-.19-.09-.29-.15-.11-.07-.19-.11-.23-.11h-.01c-.02.03-.04.13-.06.31-.02.13-.03.21-.04.24-.02.02-.05.04-.09.04h-.1l.01-.5c.01-.33.03-.52.05-.58.02-.06.05-.08.09-.08.05 0 .13.06.22.19.06.09.16.18.28.28.12.1.2.14.25.14h.02c.01-.01.01-.03.01-.06 0-.05-.01-.13-.03-.23-.01-.11-.02-.19-.02-.25 0-.05 0-.08.01-.09zM8.34.11c.16-.01.29-.02.39-.02h.04c.08 0 .13.01.14.02.02.02.03.05.04.11v.06c0 .03-.01.05-.03.06-.01.01-.05.01-.11.01-.09 0-.14.01-.17.02s-.05.04-.05.08c0 .05.02.15.07.31.05.19.08.32.08.4 0 .08-.03.13-.08.15-.01.01-.02.01-.03.01-.04 0-.08-.03-.12-.08a.208.208 0 0 1-.07-.15c0-.05-.02-.17-.07-.37-.05-.19-.09-.3-.1-.31C8.27.4 8.26.4 8.25.4c-.05 0-.1.01-.18.03-.07.01-.13.02-.19.02-.02 0-.04 0-.05-.01-.02 0-.05-.03-.07-.06a.224.224 0 0 1-.03-.1c0-.02 0-.03.01-.03.02-.02.09-.05.21-.07.13-.03.26-.05.39-.07zM9.62.04C9.7.01 9.75 0 9.78 0s.06.01.1.02c.04.02.06.04.06.06 0 .05-.07.11-.22.17-.08.04-.14.07-.17.1s-.04.05-.04.08c0 .05.01.07.03.07.01 0 .03-.01.06-.02a.74.74 0 0 1 .18-.03c.07 0 .1.02.1.06 0 .03-.01.06-.05.1-.04.04-.1.08-.17.11-.15.07-.23.13-.23.18 0 .02.02.05.05.08.02.01.04.02.07.02.04 0 .09-.01.16-.04.16-.06.27-.09.33-.09.04 0 .06.01.06.04s-.03.08-.08.13c-.06.06-.12.1-.19.14-.05.03-.13.04-.23.04-.14 0-.24-.03-.3-.08a.17.17 0 0 1-.07-.1.882.882 0 0 1-.02-.22V.66c.01-.24.02-.4.05-.49.02-.09.07-.13.13-.13h.03c.02.01.05.01.08.01.05 0 .09 0 .12-.01z"
        style={{
          fill: "#000",
          fillRule: "nonzero",
        }}
      />
    </svg>
  );
}

function SentimentoText() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="100%"
      viewBox="0 0 6.63 0.82"
    // {...props}
    >
      <path
        d="M.15.1C.17.09.19.09.22.09.29.09.34.1.37.13.39.14.4.16.4.19H.39V.2c0 .01 0 .02-.01.03H.27a.2.2 0 0 0-.09.02C.16.26.15.28.15.3c0 .03.01.06.04.1.03.03.08.06.13.09.04.02.08.04.1.07.02.02.04.05.04.07 0 0-.01.01-.01.02C.44.68.4.71.31.75.23.8.16.82.12.82.08.82.06.81.03.8.01.78 0 .77 0 .75 0 .74 0 .73.01.72.01.7.04.69.09.69S.19.68.22.66L.27.63.15.51C.09.45.06.42.04.39a.188.188 0 0 1 .02-.2C.09.14.12.12.15.1zM.82.02C.86.01.89 0 .9 0c.02 0 .04 0 .05.01.03.01.04.02.04.03C.99.07.95.1.87.13.83.16.8.17.78.19.76.2.76.22.76.23c0 .02 0 .04.01.04S.79.26.8.26C.85.25.88.24.9.24c.04 0 .06.01.06.03C.96.29.95.3.93.32.91.35.88.37.84.39.76.42.72.46.72.48c0 .01.01.03.02.04.01.01.03.01.04.01C.8.53.83.53.86.51c.09-.03.15-.04.18-.04.02 0 .03 0 .03.02 0 .01-.01.04-.04.07a.36.36 0 0 1-.1.07C.9.64.86.65.81.65.73.65.68.64.65.61.63.59.61.58.61.56.6.54.6.5.6.44V.35C.6.23.61.14.62.09.64.05.66.02.69.02h.02c.01.01.03.01.04.01C.78.03.8.02.82.02zm.87.1c.02-.03.03-.04.05-.04.03 0 .05.02.07.06.02.05.03.12.05.21.01.08.01.14.01.16 0 .04-.01.06-.02.07-.01.02-.03.02-.06.02-.04 0-.08-.01-.13-.03C1.6.55 1.55.52 1.5.49 1.44.45 1.4.43 1.38.43h-.01c-.01.02-.02.07-.03.17-.01.07-.02.11-.02.12-.01.02-.03.03-.05.03h-.06l.01-.27c.01-.18.02-.28.03-.31.01-.03.02-.04.04-.04.04 0 .07.03.12.1.04.05.09.1.15.15.07.05.11.08.14.08 0 0 0-.01.01-.01V.42c0-.03 0-.07-.01-.12-.01-.06-.02-.1-.02-.14 0-.02.01-.03.01-.04zm.65-.06c.09-.01.16-.01.21-.01h.02c.04 0 .07 0 .08.01.01.01.01.03.02.06v.03c0 .02-.01.03-.02.03-.01.01-.03.01-.06.01-.04 0-.07 0-.09.01-.01 0-.02.02-.02.04 0 .03.01.08.03.17.03.1.05.17.05.21 0 .04-.02.07-.05.08H2.5c-.02 0-.04-.01-.07-.04A.114.114 0 0 1 2.4.58c0-.02-.02-.09-.04-.19C2.33.28 2.31.22 2.3.22c0 0 0-.01-.01-.01-.02 0-.05.01-.09.02-.04.01-.07.01-.1.01h-.03L2.03.2C2.02.18 2.02.16 2.02.15V.13c.01-.01.05-.02.12-.04l.2-.03zm.49.12c.01-.01.02-.01.04-.01s.03 0 .05.01c.01 0 .02.01.03.02 0 .02.01.07.01.13 0 .07 0 .12.02.17 0 .02.01.03.01.05 0 .02-.01.04-.02.05-.01.01-.02.02-.04.02S2.9.61 2.88.59C2.86.58 2.85.55 2.83.52A.947.947 0 0 1 2.81.3c0-.07.01-.11.02-.12zm.3-.08c.01-.01.02-.02.04-.02.03 0 .08.04.14.11.02.03.05.05.07.07.02.02.04.03.05.03 0 0 .02 0 .03-.02.02-.01.03-.03.04-.05.06-.08.1-.12.14-.12.06 0 .09.08.1.23.01.11.02.18.03.21v.01c0 .03-.01.05-.03.07-.01.01-.03.02-.04.02-.02 0-.04-.01-.05-.03-.02-.02-.03-.05-.03-.09-.01-.08-.03-.11-.05-.11-.01 0-.03.01-.06.04S3.45.5 3.43.5c-.02 0-.06-.01-.11-.03H3.3c-.01 0-.01.01-.01.03v.07c0 .03 0 .04-.01.05-.01.01-.02.01-.04.01-.03 0-.05-.01-.06-.04 0-.02-.02-.1-.03-.24L3.14.34V.33c-.01-.1-.01-.16-.01-.19V.1zm1-.08c.04-.01.06-.02.08-.02.02 0 .03 0 .05.01.02.01.03.02.03.03 0 .03-.03.06-.11.09-.05.03-.08.04-.09.06-.02.01-.03.03-.03.04 0 .02.01.04.02.04s.02-.01.03-.01c.04-.01.08-.02.1-.02.04 0 .05.01.05.03 0 .02-.01.03-.03.05-.02.03-.05.05-.09.07-.08.03-.12.07-.12.09 0 .01.01.03.03.04.01.01.02.01.04.01.01 0 .04 0 .08-.02.09-.03.15-.04.18-.04.02 0 .03 0 .03.02 0 .01-.02.04-.05.07-.02.03-.06.05-.09.07-.03.01-.07.02-.12.02-.08 0-.13-.01-.17-.04-.02-.02-.03-.03-.04-.05C3.91.54 3.9.5 3.9.44c0-.01.01-.02.01-.04V.35c0-.12.01-.21.02-.26.01-.04.04-.07.07-.07h.02c.01.01.02.01.04.01.03 0 .05-.01.07-.01zm.87.1c.01-.03.03-.04.05-.04.03 0 .05.02.07.06.02.05.03.12.04.21.01.08.02.14.02.16 0 .04-.01.06-.03.07C5.14.6 5.12.6 5.1.6a.44.44 0 0 1-.14-.03c-.05-.02-.1-.05-.15-.08-.06-.04-.1-.06-.13-.06-.02.02-.03.07-.04.17 0 .07-.01.11-.02.12-.01.02-.02.03-.05.03h-.05l.01-.27c0-.18.01-.28.02-.31.02-.03.03-.04.05-.04.03 0 .07.03.12.1.03.05.08.1.15.15.06.05.11.08.13.08.01 0 .01-.01.01-.01.01 0 .01-.01.01-.03 0-.03 0-.07-.01-.12C5 .24 4.99.2 4.99.16c0-.02 0-.03.01-.04zm.65-.06c.08-.01.15-.01.21-.01h.02c.04 0 .07 0 .07.01.01.01.02.03.02.06v.03c0 .02 0 .03-.01.03-.01.01-.03.01-.06.01-.05 0-.08 0-.09.01-.02 0-.03.02-.03.04 0 .03.02.08.04.17.03.1.04.17.04.21 0 .04-.01.07-.04.08h-.01c-.03 0-.05-.01-.07-.04A.09.09 0 0 1 5.7.58c0-.02-.01-.09-.04-.19-.02-.11-.04-.17-.05-.17L5.6.21c-.02 0-.05.01-.09.02-.04.01-.08.01-.1.01h-.03A.078.078 0 0 1 5.34.2C5.33.18 5.32.16 5.32.15c0-.01.01-.02.01-.02.01-.01.05-.02.11-.04l.21-.03zm.81.28C6.45.32 6.41.31 6.36.3h-.04c-.02 0-.03 0-.03.01-.01.01-.01.03-.02.06 0 .02-.01.04-.01.05 0 .04.01.07.02.1.01.02.03.04.05.04.02 0 .06-.01.1-.05.04-.03.06-.07.06-.11 0-.03-.01-.05-.03-.06zM6.21.17c.03-.02.04-.02.05-.02 0 0 .03.01.06.03.04.02.09.03.14.04.05.01.09.03.12.07.04.03.05.07.05.12 0 .03 0 .07-.02.1-.03.04-.07.09-.13.13-.06.03-.11.05-.15.05-.04 0-.06 0-.08-.01a.187.187 0 0 1-.07-.06C6.15.59 6.14.57 6.13.55 6.12.54 6.12.52 6.12.5V.42c.02-.13.05-.21.09-.25z"
        style={{
          fill: "#000",
          fillRule: "nonzero",
        }}
      />
    </svg>
  );
}

function SurpresaText() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="100%"
      viewBox="0 0 13.67 2.15"
    // {...props}
    >
      <defs>
        <style>{".fil0,.fil1{fill:#000;fill-rule:nonzero}"}</style>
      </defs>
      <g id="Camada_x0020_1">
        <path
          d="M1.13.92c.02-.01.04-.02.06-.02.04 0 .07.01.1.03.02.01.03.07.03.19 0 .07 0 .15-.02.22-.01.08-.02.12-.04.14-.02.04-.05.05-.09.05a.4.4 0 0 1-.23-.1l-.15-.1-.12.13c-.03.04-.07.07-.1.09-.03.03-.05.04-.06.04-.02 0-.11-.08-.27-.24C.08 1.18 0 1.09 0 1.06c0-.03.02-.05.05-.05.07 0 .17.06.29.17l.18.15.05-.06c.04-.06.07-.1.09-.13l.05-.07.15.1c.1.06.16.09.18.09.02 0 .04-.02.05-.07.02-.04.02-.09.02-.16 0-.06.01-.1.02-.11zm.88.31c-.02-.02-.07-.04-.14-.05-.03 0-.05-.01-.07-.01-.02 0-.03.01-.04.02-.01.01-.02.04-.02.09-.01.03-.01.06-.01.08 0 .05.01.09.02.13.02.04.04.06.07.07h.01c.03 0 .07-.03.13-.07.07-.06.1-.11.1-.17 0-.03-.02-.06-.05-.09zM1.66 1c.03-.03.05-.04.06-.04.01 0 .04.02.09.04.06.03.12.05.19.06.08.02.14.05.19.1.04.05.07.11.07.18 0 .05-.02.09-.04.13-.03.07-.1.13-.18.19-.08.05-.16.08-.22.08-.05 0-.09 0-.11-.02a.27.27 0 0 1-.11-.09.678.678 0 0 1-.06-.09c-.02-.02-.02-.04-.02-.07 0-.03 0-.06.01-.11.02-.19.06-.31.13-.36zM3.6.92c.01-.01.03-.02.06-.02s.07.01.1.03c.02.01.03.07.03.19 0 .07-.01.15-.02.22-.01.08-.02.12-.04.14a.11.11 0 0 1-.1.05c-.05 0-.13-.03-.23-.1l-.15-.1-.12.13c-.03.04-.06.07-.09.09-.03.03-.05.04-.06.04-.03 0-.12-.08-.28-.24-.16-.17-.23-.26-.23-.29 0-.03.01-.05.05-.05.07 0 .16.06.29.17l.18.15.04-.06c.04-.06.07-.1.1-.13l.05-.07.15.1c.09.06.15.09.18.09.02 0 .03-.02.05-.07.01-.04.02-.09.02-.16 0-.06.01-.1.02-.11zM5.47.74c.02-.01.05-.02.1-.02.09 0 .16.02.2.05.03.03.04.05.04.09v.01c-.01.02-.01.04-.02.05-.01 0-.04.01-.07.01-.02 0-.04 0-.05-.01h-.04c-.06 0-.1.01-.13.03-.03.02-.04.04-.04.08s.02.08.06.13c.05.04.11.09.19.13.06.03.1.06.14.1.03.03.05.07.05.1 0 .01 0 .02-.01.03-.01.04-.08.09-.2.15-.12.06-.21.09-.28.09-.04 0-.08-.01-.12-.03-.03-.02-.04-.04-.04-.07v-.03c.01-.03.06-.05.13-.05s.13-.01.18-.05l.07-.04-.18-.18a.814.814 0 0 1-.14-.16.15.15 0 0 1-.04-.11c0-.06.02-.12.06-.18.04-.06.08-.1.14-.12zm.69.09c.03-.04.06-.06.09-.06l.07.04c.02.02.02.04.02.07 0 .03-.01.07-.02.14-.02.07-.02.12-.02.16 0 .11.03.16.1.16.05 0 .11-.03.19-.1.05-.03.08-.07.1-.09.01-.03.02-.06.02-.1 0-.04.01-.09.04-.13.03-.04.05-.06.08-.06.02 0 .05.02.07.05.03.02.04.06.04.12v.12c-.02.14-.03.21-.04.22 0 .01-.12.05-.34.14-.06.02-.12.03-.17.03-.09 0-.17-.03-.22-.1-.04-.05-.06-.16-.06-.32 0-.14.01-.24.05-.29zm1.44 0C7.57.81 7.55.8 7.52.8c-.02 0-.05.01-.09.04-.02.02-.04.04-.04.08 0 .02.01.05.01.07.01.06.03.1.04.1.01 0 .02-.01.04-.03a.26.26 0 0 0 .11-.12c.03-.04.04-.06.04-.08 0-.01-.01-.02-.03-.03zM7.31.68c.12-.04.21-.06.28-.06.15 0 .22.08.22.24 0 .04 0 .1-.01.15-.01.03-.01.05-.01.07 0 .02.01.05.05.08.03.02.13.08.27.17.07.04.11.08.11.12 0 .03-.03.05-.07.05-.08 0-.2-.05-.34-.14a.51.51 0 0 0-.14-.09.108.108 0 0 0-.07-.03c-.01 0-.04.01-.07.03-.03.02-.05.03-.06.04-.01.01-.01.03-.01.06v.09c.01.05.01.08.01.1 0 .04-.01.06-.04.07-.01 0-.02.01-.03.01-.03 0-.06-.03-.08-.09a.906.906 0 0 1-.06-.27c-.04-.18-.06-.3-.08-.33a.277.277 0 0 1-.03-.13c0-.03.01-.05.03-.07a.46.46 0 0 1 .13-.07zm1.5.44c.02-.02.03-.05.03-.08S8.83.98 8.81.96A.134.134 0 0 0 8.74.9C8.72.88 8.7.88 8.69.88c-.02 0-.02.01-.02.04 0 .04.01.1.04.16.03.04.05.07.06.07.01 0 .02-.01.04-.03zM8.59.71C8.61.7 8.63.7 8.65.7c.1 0 .19.03.28.08.04.03.07.07.1.13s.05.12.05.16c0 .01 0 .02-.01.03-.01.04-.05.09-.12.17-.08.07-.12.1-.15.1s-.04.04-.05.13c0 .04-.01.08-.02.1-.01.02-.02.03-.04.04h-.03c-.03 0-.06-.02-.07-.06-.01-.03-.03-.11-.04-.22-.02-.14-.05-.26-.08-.37a.491.491 0 0 1-.03-.12c0-.02.01-.05.03-.08.05-.04.09-.07.12-.08zm1.15.12A.16.16 0 0 0 9.66.8c-.02 0-.05.01-.09.04-.03.02-.04.04-.04.08 0 .02 0 .05.01.07.01.06.02.1.04.1 0 0 .02-.01.04-.03a.26.26 0 0 0 .11-.12c.02-.04.04-.06.04-.08 0-.01-.01-.02-.03-.03zM9.45.68c.11-.04.21-.06.28-.06.15 0 .22.08.22.24 0 .04 0 .1-.02.15 0 .03-.01.05-.01.07 0 .02.02.05.06.08.03.02.12.08.27.17.07.04.11.08.11.12 0 .03-.03.05-.07.05-.09 0-.2-.05-.34-.14a.51.51 0 0 0-.14-.09c-.03-.02-.05-.03-.07-.03-.01 0-.04.01-.07.03-.03.02-.05.03-.06.04-.01.01-.02.03-.02.06 0 .01.01.05.01.09.01.05.01.08.01.1 0 .04-.01.06-.04.07-.01 0-.02.01-.03.01-.03 0-.06-.03-.08-.09a.842.842 0 0 1-.07-.27c-.03-.18-.06-.3-.07-.33a.277.277 0 0 1-.03-.13c0-.03.01-.05.03-.07a.46.46 0 0 1 .13-.07zm1.43-.06c.05-.02.09-.03.12-.03.02 0 .04.01.07.02.03.01.04.02.04.04 0 .04-.05.08-.16.13-.06.03-.11.06-.13.08-.02.02-.03.04-.03.06 0 .03 0 .05.02.05.01 0 .02 0 .04-.01.06-.02.11-.03.15-.03.05 0 .07.02.07.05 0 .02-.01.05-.04.08a.49.49 0 0 1-.13.08c-.11.06-.17.1-.17.14 0 .01.01.03.04.06.01.01.03.01.05.01.03 0 .07-.01.12-.03.12-.04.21-.06.25-.06.03 0 .05.01.05.03 0 .02-.03.05-.07.1-.04.04-.08.07-.13.1-.05.02-.11.03-.18.03-.11 0-.18-.02-.23-.06a.187.187 0 0 1-.06-.07c-.01-.03-.01-.09-.01-.18V1.09c0-.18.02-.3.03-.37.02-.06.06-.1.11-.1h.02c.02.01.04.01.06.01.04 0 .07 0 .1-.01zm.79.12a.381.381 0 0 1 .31.03c.02.03.03.05.03.09v.01c0 .02-.01.04-.02.05-.01 0-.03.01-.06.01-.02 0-.04 0-.06-.01h-.04c-.05 0-.09.01-.12.03-.03.02-.05.04-.05.08s.02.08.07.13c.04.04.1.09.18.13.06.03.11.06.14.1.03.03.05.07.05.1v.03c-.02.04-.08.09-.2.15-.13.06-.22.09-.28.09-.05 0-.09-.01-.12-.03-.03-.02-.05-.04-.05-.07 0-.01 0-.02.01-.03.01-.03.05-.05.12-.05.08 0 .14-.01.18-.05l.07-.04-.17-.18a.662.662 0 0 1-.15-.16.202.202 0 0 1-.03-.11c0-.06.02-.12.05-.18.04-.06.09-.1.14-.12zm1.06.08c-.02-.05-.04-.08-.06-.08-.01 0-.03.02-.04.05-.01.03-.02.06-.02.09 0 .05.03.07.08.07.02 0 .04 0 .05-.01.02 0 .02-.01.02-.03 0-.01-.01-.05-.03-.09zm-.26-.15.09-.29h.1c.05 0 .08.01.1.02.02.02.05.07.08.15.05.1.1.25.14.46.04.2.06.32.06.35 0 .03 0 .04-.01.05-.01 0-.03.01-.05.01-.04 0-.07-.02-.09-.04-.02-.02-.04-.07-.07-.14-.01-.03-.02-.06-.04-.07-.02-.01-.05-.01-.1-.01-.06 0-.11.01-.14.03-.03.03-.05.06-.05.11 0 .03 0 .05-.01.06-.02.01-.04.01-.08.01s-.06 0-.07-.01c-.01-.01-.02-.04-.02-.07 0-.05.01-.11.03-.18.02-.08.06-.22.13-.44z"
          className="fil0"
        />
        <path
          d="m5.04 2.14.08-.01c.15-.07 0-.27-.15-.22l-.06.01c-.08.01-.11-.02-.13-.13L4.63.7c-.02-.11.03-.15.11-.16.04-.01.07-.02.11-.02C4.9.51 5 .4 4.9.35l-.08.01c-.24.03-.41.19-.36.44l.2 1.04c.04.25.14.33.38.3zM13.35.01 13.28 0c-.16.05-.06.27.1.25h.06c.07.01.1.04.1.16l-.08 1.1c-.01.11-.07.13-.15.13h-.11c-.04 0-.17.08-.08.15h.08c.24.02.44-.09.44-.35l.03-1.06c0-.25-.07-.35-.32-.37z"
          className="fil1"
        />
      </g>
    </svg>
  );
}

function IndagacaoText() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="100%"
      viewBox="0 0 4.98 1.04"
    >
      <defs>
        <style>{".fil1{fill:#000;fill-rule:nonzero}"}</style>
      </defs>
      <g id="Camada_x0020_1">
        <g id="_1741188057392">
          <path
            d="M.01.53C.02.52.03.52.05.52h.04c.02.01.02.02.03.02 0 .02.01.06.01.12s0 .11.01.15c.01.01.01.03.01.04 0 .02 0 .03-.01.04C.13.9.12.91.1.91.09.91.07.9.06.89.04.87.03.85.02.83A.875.875 0 0 1 0 .63c0-.06 0-.09.01-.1zM.69.47C.7.45.71.44.73.44.76.44.78.46.79.5c.02.03.03.09.04.18.01.07.01.12.01.14 0 .03 0 .05-.01.06C.81.89.8.89.77.89S.7.89.66.87A.914.914 0 0 1 .52.8C.47.76.43.75.41.75a.41.41 0 0 0-.03.14C.37.95.37.99.36 1c-.01.01-.02.02-.04.02H.27L.28.79C.28.64.29.55.3.52.31.49.32.48.34.48.37.48.4.51.45.57.48.61.52.66.57.7c.06.05.1.07.12.07H.7C.71.76.71.75.71.74.71.71.7.68.69.63.69.58.68.54.68.51c0-.02 0-.03.01-.04zm.64.06C1.31.52 1.28.5 1.25.5 1.21.49 1.18.48 1.16.48c-.02 0-.03.01-.04.01v.12c.01.09.02.15.02.18.01.04.02.05.04.05.01 0 .02 0 .03-.02.02-.01.04-.03.07-.07.06-.06.09-.11.09-.15 0-.03-.01-.05-.04-.07zM.97.42c.01-.02.06-.04.14-.04.1 0 .18.02.24.05.09.05.14.11.14.19v.04c-.01.06-.06.13-.14.2-.09.07-.16.1-.22.1h-.02C1.07.95 1.04.87 1.02.71A.686.686 0 0 0 .98.52C.98.49.97.47.97.44V.42zm.9.09C1.86.48 1.85.46 1.83.46c-.01 0-.01.01-.02.03-.01.02-.01.04-.01.06 0 .03.01.04.04.04.02 0 .03 0 .04-.01 0 0 .01 0 .01-.01S1.88.54 1.87.51zM1.71.42l.05-.18h.07c.03 0 .05 0 .06.01.01.01.03.04.05.09.03.07.05.16.08.28.03.13.04.2.04.22 0 .02 0 .02-.01.03h-.03c-.02 0-.04 0-.05-.02a.191.191 0 0 1-.04-.08C1.92.75 1.91.73 1.9.73 1.89.72 1.87.72 1.84.72c-.04 0-.07 0-.09.02-.02.01-.03.03-.03.06 0 .02 0 .03-.01.04 0 0-.02.01-.04.01-.03 0-.04-.01-.05-.01 0-.01-.01-.02-.01-.05 0-.02.01-.06.02-.11.01-.04.04-.13.08-.26zm.6.09a.09.09 0 0 1 .07-.03c.03 0 .05.01.07.04.02.03.02.04.02.06 0 .03-.02.05-.06.05-.02 0-.05.01-.07.05a.15.15 0 0 0-.04.11V.8c0 .02.01.04.01.05.01 0 .02.01.05.01h.01c.02 0 .03-.01.03-.02S2.39.81 2.37.79C2.36.78 2.36.76 2.36.75c0-.02.03-.04.11-.05h.06c.02 0 .03 0 .04.01 0 0 .01.01.02.03.03.03.04.09.04.16v.03c0 .02-.01.02-.03.02h-.05c-.01 0-.03-.01-.04-.01-.03 0-.05.01-.07.02-.01 0-.03.01-.06.01-.06 0-.11-.02-.15-.06a.166.166 0 0 1-.05-.12c0-.03.02-.08.04-.14.03-.06.06-.11.09-.14zm.7 0C3 .48 2.99.46 2.98.46c-.01 0-.02.01-.03.03-.01.02-.01.04-.01.06 0 .03.01.04.05.04.01 0 .02 0 .03-.01.01 0 .01 0 .01-.01S3.02.54 3.01.51zM2.85.42l.06-.18h.06c.03 0 .05 0 .06.01.01.01.03.04.05.09.03.07.06.16.08.28.03.13.04.2.04.22 0 .02 0 .02-.01.03h-.03c-.02 0-.04 0-.05-.02C3.1.84 3.09.81 3.07.77 3.06.75 3.05.73 3.04.73 3.03.72 3.01.72 2.98.72c-.04 0-.07 0-.09.02-.01.01-.02.03-.02.06 0 .02-.01.03-.01.04-.01 0-.03.01-.05.01-.02 0-.04-.01-.04-.01-.01-.01-.01-.02-.01-.05 0-.02 0-.06.01-.11.02-.04.04-.13.08-.26zm.64-.06c.04-.03.08-.04.13-.04.03 0 .06.01.09.03.02.02.04.05.05.09.01.01.01.02.01.03 0 .02-.01.02-.02.02s-.02 0-.05-.02a.108.108 0 0 0-.07-.03c-.05 0-.09.03-.13.09-.04.05-.06.11-.06.16 0 .03.01.07.03.1 0 .01.01.02.01.03l.02.02h.02c.02 0 .06-.01.13-.04s.11-.04.13-.04c.01 0 .03 0 .04.01.01.01.02.02.02.03 0 .01-.02.03-.04.05-.03.02-.07.04-.12.06-.06.02-.11.04-.14.04-.05 0-.09-.02-.12-.06a.26.26 0 0 1-.07-.1c-.01-.03-.02-.06-.02-.1 0-.04.02-.09.05-.17.04-.07.08-.13.11-.16zm.73.15C4.21.48 4.2.46 4.19.46c-.01 0-.02.01-.03.03-.01.02-.01.04-.01.06 0 .03.01.04.04.04.02 0 .03 0 .04-.01.01 0 .01 0 .01-.01S4.23.54 4.22.51zM4.06.42l.05-.18h.07c.03 0 .05 0 .06.01.01.01.03.04.05.09.03.07.06.16.08.28.03.13.04.2.04.22 0 .02 0 .02-.01.03h-.03c-.02 0-.04 0-.05-.02a.191.191 0 0 1-.04-.08C4.27.75 4.26.73 4.25.73 4.24.72 4.22.72 4.19.72c-.04 0-.07 0-.09.02-.01.01-.02.03-.02.06 0 .02-.01.03-.01.04-.01 0-.03.01-.05.01-.02 0-.04-.01-.05-.01V.79c0-.02 0-.06.01-.11.01-.04.04-.13.08-.26zm.78.24a.465.465 0 0 0-.09-.03h-.04c-.01 0-.02 0-.03.01 0 .01-.01.02-.01.05 0 .02-.01.04-.01.05 0 .03.01.06.02.08.01.02.02.04.04.04s.05-.01.09-.04c.03-.03.05-.07.05-.1 0-.02-.01-.04-.02-.06zM4.62.52c.02-.01.03-.02.04-.02 0 0 .02.01.05.02.04.02.08.03.12.04.05.01.08.03.11.06s.04.07.04.11c0 .03 0 .06-.02.08-.02.04-.05.08-.11.11-.05.04-.09.05-.13.05-.03 0-.05 0-.07-.01-.02-.01-.04-.02-.06-.05-.02-.03-.04-.05-.04-.06-.01-.01-.01-.03-.01-.04V.74c.01-.12.04-.19.08-.22z"
            style={{
              fill: "#000",
              fillRule: "nonzero",
            }}
          />
          <path
            d="M4.37.16c.01.01.02.04 0 .05-.09.05-.08-.06-.13-.07-.02 0-.04 0-.06.02-.02.02-.05.07-.09.07C3.94.24 3.9.1 3.91.07c.01-.03.01-.04.02-.05.02-.02.03-.02.04-.02 0 0 .01 0 .02.01.01 0 0 .02.01.06.02.11.07.08.11.05.04-.03.07-.05.09-.06.01-.01.03-.01.05-.01a.3.3 0 0 1 .08.04c.02.02.04.05.04.07zM3.6 1.03c-.01-.01-.04-.01-.03-.03.02-.1.1-.02.14-.05.01-.02 0-.04.01-.07 0-.03.01-.04.05-.05.05-.02.04.02.04.04 0 .03 0 .07-.01.09-.01.02-.02.04-.04.05-.02.02-.04.03-.08.03-.03 0-.06 0-.08-.01z"
            className="fil1"
          />
        </g>
      </g>
    </svg>
  );
}