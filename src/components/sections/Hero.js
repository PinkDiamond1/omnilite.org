import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  // i forgot how to write js
  const os = ['Windows', 'Mac', 'Linux']
  const windowsBinary = 'https://github.com/OmniLite/omnilite/releases/download/v0.18.1/omnilite-0.18.1-win64-setup.exe'
  const macBinary = 'https://github.com/OmniLite/omnilite/releases/download/v0.18.1/omnilite-0.18.1-osx-unsigned.dmg'
  const linuxBinary = 'https://github.com/OmniLite/omnilite/releases/tag/v0.18.1'
  var downloadURL = ''
  
    os.find(system => {
      if (navigator.appVersion.indexOf(system) >= 0) {
        if (system === 'Windows') {
          downloadURL =  windowsBinary
        } else if (system === 'Mac') {
          downloadURL =  macBinary
        } else {
          downloadURL =  linuxBinary
        }
      }
    })
  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              OmniLite for <span className="text-color-primary">Litecoin</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Create and manage tokens on top of the Litecoin Network.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href={downloadURL}>
                    Download
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/omnilite/omnilite">
                    View on GitHub
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div style={{paddingBottom: 250}} />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
