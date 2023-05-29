import styled from '@emotion/styled'
import P from './paragraph'

const TextTypeWrite = styled(P)`
  text-indent: 1em;
  hyphens: auto;
  position: relative;
  margin: 0 auto;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blinkingCursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }

  animation: typewriter 5s steps(50) 1s 1 normal both,
    blinkingCursor 500ms steps(50) infinite normal;
`
// shadows show on
// @keyframes fade {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }
//
// @media (max-width: 500px) {
//   #name {
//     font-size: 13vw;
//   }
//   #info {
//     font-size: 5.3vw;
//   }
// }

export default TextTypeWrite
