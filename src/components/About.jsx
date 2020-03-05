import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"
import jo from "images/joanna.jpg"

const AboutContainer = styled("div")`
  padding-top: 1em;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 3em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 2em;
  }
`

const AboutLinkContainer = styled("div")`
  padding-top: 1em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 2;
  }
`

const AboutLink = styled("a")`
  margin-bottom: 1.5em;
  font-weight: 600;
  line-height: 1.9;
  text-decoration: none;
  color: currentColor;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    opacity: 0;
    transition: all 400ms ease-in-out;
  }

  &:hover {
    span {
      transform: translateX(0px);
      opacity: 1;
      transition: all 150ms ease-in-out;
    }
  }
`

const AboutBio = styled("div")`
  padding-bottom: 3em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 2;
  }
`

const AboutActions = styled("div")`
  padding-top: 1em;
  padding-bottom: 3em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 0;
    grid-column: 1 / -1;
    grid-row: 1;
  }
`
const Joanna = styled("img")`
  max-width: 303px;
  margin-top: 0.25em;
  display: block;
  margin: auto;
`

const About = ({ bio, socialLinks }) => (
  <AboutContainer>
    <AboutBio>
      {RichText.render(bio)}

      <AboutLinkContainer>
        {socialLinks.map((social, i) => (
          <AboutLink
            key={i}
            href={social.about_link[0].spans[0].data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.about_link[0].text}
            <span>&#8594;</span>
          </AboutLink>
        ))}
      </AboutLinkContainer>
    </AboutBio>
    <AboutActions>
      <Joanna className="FooterSpooch" src={jo} />
      {/* <a
        href="mailto:marguerite.roth@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="Button--secondary">Email me</Button>
      </a> */}
    </AboutActions>
  </AboutContainer>
)

export default About

About.propTypes = {
  bio: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
}
