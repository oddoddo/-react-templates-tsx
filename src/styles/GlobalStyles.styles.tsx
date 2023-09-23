import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
    :root {
        --primary: #120E46;
        --S_Light: #cbc8ec;
        --primary-light: rgba(90, 84, 164, 0.80);
        --primary-1: #8a87b3;
        --primary-2: #8D86D5;
        --primary-3: #908eae;
        // --S_Light: red;

        --secondary: #fca311;
        --secondary-light: #ffba32;
        --secondary-dark: #c28400;

        --danger: #dc3545;
        --danger-light: #e4606d;
        --danger-dark: #b02a37;

        --success: #198754;
        --success-light: #28a745;
        --success-dark: #157347;

        --warning: #ffc107;
        --warning-light: #ffca2c;
        --warning-dark: #d39e00;

        --info: #0dcaf0;
        --info-light: #39d4ff;
        --info-dark: #0b9ed7;

        --white: #fff;
        --black: #000;

        --gray-1: #f8f9fa;
        --gray-2: #e9ecef;
        --gray-3: #dee2e6;
        --gray-4: #ced4da;
        --gray-5: #adb5bd;
        --gray-6: #6c757d;
        --gray-7: #495057;
        --gray-8: #343a40;
        --gray-9: #212529;

        --font-reqular: 1rem;
        --font-small: 0.8rem

        --max-width: 1200px;
        --header-height: 60px;
    }
    ${reset}

    // body {
    //     background: url(images/1.png) no-repeat 100% 0 !important;
    //     #root {
    //         opacity: 0.5 !important;
    //     }
    // }
    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    /* 기본 폰트 설정 */
    body, html {
        line-height: 1.5;
        font-family: 'Spoqa Han Sans Neo', "Malgun Gothic", "맑은 고딕", sans-serif;
        font-weight: 400;
        color: red;
    }

    ul, ol, li {
        list-style: none;
    }

    .blind,
    caption,
    legend {
        overflow: hidden;
        position: absolute;
        width: 0;
        height: 0;
        line-height: 0;
        text-indent: -9999px;
    }

`;

export default GlobalStyles;
