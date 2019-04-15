import styled from '@emotion/styled';

const ScoreBoardAnimate = styled.div`
.bucket {
  color: ghostwhite;
  --borderWidth: 10px;
  position: relative;
  border-radius: var(--borderWidth);
  max-width: 150px;
  margin: 0 auto;
  z-index: 10;
}

.bucket:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedGradient 300ms ease alternate infinite;
  background-size: 300% 300%;
  -webkit-animation: animatedGradient 300ms ease alternate infinite;
}


@keyframes animatedGradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
`;

export default ScoreBoardAnimate;
