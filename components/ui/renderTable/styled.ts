import Styled from 'styled-components';

const Table = Styled.table`
width: 98%;
margin:0.7rem auto;
border: 1px solid black;
border-collapse: collapse;

p{
    margin:0;
}
th{
    font-size: 1.3rem;
    border: 1px solid black;
    padding: 0.4rem;
}
td{
    font-size: 1.3rem;
    border: 1px solid black;
    padding: 0.3rem;
    text-align:center;
}
`;
interface ButtonProps {
  left?: boolean;
  right?: boolean;
}

const ButtonStyled = Styled.button<ButtonProps>`
position: fixed;
top: 55%;
left: ${({ left }) => (left ? '5px' : 'none')};
right: ${({ right }) => (right ? '5px' : 'none')};
background-color: #343a40;
width: 50px;
height: 50px;
border: none;
cursor: pointer;
border-radius: 50%;
Z-Index: 1000;
opacity: 0.2;
    :hover {
        opacity: 1;
        transform: scale(1.2);
        transition: 200ms;

    }
    div { 
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    `;
const TableContainerStyled = Styled.div`
    margin:0.1rem 0 0.1rem 0.1rem;
    paddingBottom: 4rem;
    max-height: 100vh;
    max-width: 100vw;
    overflow-x: scroll;
    overflow-y: auto;
    position: relative;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none; 
        ::-webkit-scrollbar
        {
            width: 20px;
            height: 0;
        }


            ::-webkit-scrollbar-track {
                background-color: transparent;
            }

}
    ::-webkit-scrollbar-thumb {
        background-color: #d6dee1;
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
    }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #a8bbbf;
        }
        `;
export { Table, ButtonStyled, TableContainerStyled };
