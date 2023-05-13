import styled from "styled-components";

const StyledNavabar = styled.div`
    height: 100px;
    width: 100%;
    background-color: white;
    padding: 10px;
    box-sizing: border-box;
    color: #bb0d0d;
    box-shadow: 0px 1px 10px #999;
    position: fixed;
    top: 0;
`;

export const Navbar = () => {
    return (
        <StyledNavabar>
            <h1>ED-WINGS.COM</h1>
        </StyledNavabar>
    )
}