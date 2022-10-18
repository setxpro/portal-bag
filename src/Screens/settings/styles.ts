import styled from "styled-components";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";
import { BsCloudUpload } from "react-icons/bs";

export const Container = styled.div`
  padding: 10px 0.5rem;
`;

export const ContentArea = styled.div`
  padding: 10px 0.5rem;
`;

export const ContentTheme = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0.5rem;

  .content-alter-theme {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
      color: ${(props) => props.theme.colors.text};
      font-weight: 500;
    }

    .sub-content-alter-theme {
      display: flex;
      gap: 1rem;

      button {
        border: none;
        outline: none;
        padding: 0.5rem;
        border-radius: 8px;

        &:nth-child(1) {
          background: #eee;
          color: #000;
        }

        &:nth-child(2) {
          background: #000;
          color: #fff;
        }
      }
    }
  }
  .content-toggle-theme {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
      color: ${(props) => props.theme.colors.text};
      font-weight: 500;
    }

    .sub-content-toggle-theme {
      display: flex;
      gap: 1rem;

      button {
        padding: 0.8rem;
        border: none;
        outline: none;
        border-radius: 8px;
        cursor: pointer;

        &:nth-child(1) {
          background: #7367f0;
        }
        &:nth-child(2) {
          background: #82868b;
        }
        &:nth-child(3) {
          background: #28c76f;
        }
        &:nth-child(4) {
          background: #ea5455;
        }
        &:nth-child(5) {
          background: #00cfe8;
        }
        &:nth-child(6) {
          background: #ff9f43;
        }
        &:nth-child(7) {
          background: #4b4b4b;
        }
      }
    }
  }
`;

export const Dark = styled(MdOutlineNightlight)`
  cursor: pointer;
  font-size: 1.6rem;
  color: #fff;
  animation: 1s rot linear both;

  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }
`;
export const Light = styled(MdOutlineLightMode)`
  cursor: pointer;
  font-size: 1.6rem;
  color: #000;

  animation: 1s rot linear both;

  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }
`;

export const CheckOky = styled(BsCloudUpload)`
  cursor: pointer;
  font-size: 1.6rem;
  color: #28c76f;

  animation: 1s rot linear both;

  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }
`;

export const ContentToggleAvatar = styled.div`
  margin-top: 1rem;
  padding: 1rem 0.5rem;

  h4 {
    color: #fff;
    margin-bottom: 1rem;
  }

  .content-avatar {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 200px;
    }
    input {
      color: #fff;
    }

    button {
      width: 200px;
      height: 30px;
      border-radius: 8px;
      border: none;
      outline: none;
      background: #00cfe8;
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    }
  }

  .message-register-avatar {
    display: flex;
    align-items: center;
    gap: 10px;

    color: #28c76f;
  }
`;
