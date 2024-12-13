import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from '../img/background.jpg'; // Import your background image

const Home = () => {
  return (
    <Container>
      <BackgroundImage src={backgroundImage} alt="Background Image" />
      <ContentContainer>
        <Header>
          <h1>Welcome to Expense Tracker</h1>
          <WelcomeParagraph>Take control of your finances</WelcomeParagraph>
        </Header>
        <FeaturesSection>
          <h2>Features</h2>
          <ul>
            <li>Track your income and expenses</li>
            <li>View detailed reports and summaries</li>
            <li>Set Reminders for your Remaining Payments</li>
            <li>Secure authentication and data protection</li>
          </ul>
        </FeaturesSection>
        <Footer>
          <p>Get started now!</p>
          <ButtonContainer>
            <Link to="/signup">
              <SignUpButton>Sign Up</SignUpButton>
            </Link>
            <Link to="/login">
              <LoginButton>Login</LoginButton>
            </Link>
          </ButtonContainer>
        </Footer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const BackgroundImage = styled.img`
  width: 50%;
  height: 100vh;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: left;
  margin-bottom: 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const WelcomeParagraph = styled.p`
  width: 100%;
  font-size: 1.5rem;
  color: #000;
`;

const FeaturesSection = styled.section`
  text-align: left;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: black;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: black;
  }
`;

const Footer = styled.footer`
  text-align: left;
  margin-bottom: 2rem;

  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const SignUpButton = styled(Button)`
  background-color: #a393eb;
`;

const LoginButton = styled(Button)`
  background-color: #a393eb;
`;

export default Home;