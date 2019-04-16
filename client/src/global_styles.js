import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url(https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.3/antd.min.css);
    @import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);

    h1, h2, h3, h4, h5, h6, p, span {
        font-family: 'Jeju Myeongjo', serif !important;
    }

    html, body {
        background: #F7F7F7;

    }

    div {
        overflow-x : hidden;
        overflow-y: hidden;
    }

    .ant-drawer-wrapper-body {
        background: #F7F7F7
    }

    .ant-tabs {
        width: 90%
      }
      
    .ant-tabs-tab:hover {
    color: #B9F9F9 !important
    }
    
    .ant-tabs-tab-active {
    color: #B9F9F9 !important
    }
    
    .ant-tabs-ink-bar {
    background-color: #B9F9F9 !important
    }

    .ant-modal-body {
    padding: 24px 24px 12px 24px !important;
    }
    .modal-div {
    display: flex;
    border-top: 1px solid #bbb;
    /* justify-content: space-between */
    
    }
    
    .modal-btn {
    flex: 1;
    border: none !important;
    border-radius: 0 1important; 
    }
    
    .modal-btn:first-child {
    flex: 1;
    border: none !important;
    border-radius: 0 !important; 
    border-right: 1px solid #bbb !important
    }
`;
