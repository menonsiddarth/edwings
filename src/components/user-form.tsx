import styled from "styled-components";

const Button = styled.button`
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    border: 2px solid #a30b0b;
    width: 100%;
`;

const ButtonPrimary = styled(Button)`
    color: #fff;
    background-color: #bb0d0d;
    :hover {
        color: #bb0d0d;
        background-color: white;
    }
`;

const ButtonSecondary = styled(Button)`
    color: #bb0d0d;
    background-color: white;
    :hover {
        color: #fff;
        background-color: #bb0d0d;
    }
`;

const FormContainer = styled.div`
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 3px 9px 1px rgba(0,0,0,0.34);
    -webkit-box-shadow: 0px 3px 9px 1px rgba(0,0,0,0.34);
    -moz-box-shadow: 0px 3px 9px 1px rgba(0,0,0,0.34);
    box-sizing: border-box;
    margin-top: 100px;
    margin-bottom: 120px;
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

interface IUserFormProps {
    handleLoginClick:() => void;
}
export const UserForm = (props: IUserFormProps) => {

    const bttonClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        props.handleLoginClick();
    }

    return (
        <FormContainer>
        < form >
            <h1>Take flight to your dream destination, signup with Ed-wings for a journey beyond your imagination!</h1>
            <div>
                <label>First Name</label>
                <Input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label>Last Name</label>
                <Input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label>E-mail</label>
                <Input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label>Phone Number</label>
                <Input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

            </div>
            <ButtonDiv>
                <ButtonSecondary>Cancel</ButtonSecondary>
                <ButtonPrimary onClick={bttonClick}>Login</ButtonPrimary>
            </ButtonDiv>
        </form >
    </FormContainer >
    );
};