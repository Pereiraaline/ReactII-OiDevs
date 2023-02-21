import { useContext } from "react";
import { InstaContext } from "../../App";
import { Button } from "../../ui/button/index";


export const Photo = () => {
  const { meuState, meuDispatch } = useContext(InstaContext);

  return (
    <div>
      <Button
        onClick={() => {
          meuDispatch({ type: "change_current_page", payload: "home" });
        }}
      >
        Voltar para a home
      </Button>
      <img src={meuState.user.highlightImage.urls.regular} />
    </div>
  );
};
