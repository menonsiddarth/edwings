import './App.css';
import { Navbar } from './components/navbar';
import { UserForm } from './components/user-form';
import styled from 'styled-components';
import { SearchBoxWithIcon } from './components/chat-input-container';
import { PackageBannerSection } from './components/package-banner-section';
import { useEffect, useRef, useState } from 'react';

const ContentContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  width: 1170px;
  margin-right: auto;
  margin-left: auto;
`;

function App() {
  const [showComment, setShowComment] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      const offsetTop = sectionRef.current.offsetTop;
      if (offsetTop !== undefined) {
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    }
  }, []);

  const handleLoginClick = () => {
    setShowComment(true);
  }
  
  return (
    <div className="App">
      <Navbar />
      <ContentContainer>
        <UserForm handleLoginClick={handleLoginClick} />
        <PackageBannerSection ref={sectionRef} />
      </ContentContainer>
      {showComment ? <SearchBoxWithIcon /> : <></>}
    </div>
  );
}

export default App;
