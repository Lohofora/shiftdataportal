import styled from "../lib/styled";
import React from "react";
export default function SharingButtons({ title = "" }) {
  const isBrowser = typeof window !== "undefined";
  const url = isBrowser ? encodeURIComponent(window.location.href) : "";
  const titleEncoded = encodeURIComponent(title);
  console.log({ url, titleEncoded });
  return (
    <Container>
      <SharingButtonLink
        href={`https://facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label=""
      >
        <IconContainer style={{ backgroundColor: "#3b5998" }}>
          <Icon aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
            </svg>
          </Icon>
        </IconContainer>
      </SharingButtonLink>

      <SharingButtonLink
        href={`https://twitter.com/intent/tweet/?text=${titleEncoded}&amp;url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label=""
      >
        <IconContainer style={{ backgroundColor: "#55acee" }}>
          <Icon aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
            </svg>
          </Icon>
        </IconContainer>
      </SharingButtonLink>

      <SharingButtonLink
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label=""
      >
        <IconContainer style={{ backgroundColor: "#0077b5" }}>
          <Icon aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
            </svg>
          </Icon>
        </IconContainer>
      </SharingButtonLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const SharingButtonLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 0.5em;
  &:hover {
    opacity: 0.8;
  }
`;

const Icon = styled.div`
  fill: #fff;
  stroke: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  svg {
    width: 0.7rem;
    height: 0.7rem;
    margin: 0;
    vertical-align: middle;
  }
`;
const IconContainer = styled.div`
  border-radius: 5px;
  transition: 25ms ease-out;

  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;
