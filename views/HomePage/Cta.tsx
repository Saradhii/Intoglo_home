import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import Features from './Features';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>Why Intoglo?</OverTitle>
          <SectionTitle>Intoglo is making the cross-border logistics 10x better</SectionTitle>
          <Description>
              Intoglo’s unique solution helps to overcome the challenges many global shippers face, including lack of knowledge of global
              market trends, export regulations, documentation and the complexities in cross-border trade.
              <br></br><br></br>
            Intoglo offers a unique solution that benefits both existing and emerging exporters/importers. Existing exporters can take
            advantage of competitive pricing, reliable delivery and great customer service, while emerging and first-time exporters can
            enjoy transparency, simple and friendly onboarding, assistance with documentation/customs compliance and end-to-end solutions.
          </Description>
          <ButtonGroup>
            <NextLink href="#contact" passHref>
              <Button>
                Request Quote<span>&rarr;</span>
              </Button>
            </NextLink>
            {/* <NextLink href="#features" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink> */}
          </ButtonGroup>
        </Stack>
      </Container>
      <Features/>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.7rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-bottom:20px;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
  padding-bottom:40px;
`;
