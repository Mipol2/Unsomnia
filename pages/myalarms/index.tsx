import styled from "styled-components";
import AlarmComponent from "../../components/elements/alarm";
import AlarmForm from "../../components/elements/alarmForm";
import BaseLayout from "../../components/layout/base";
import alarmList from "../../utils/dummy";

const Main = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const AlarmList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function AlarmPage() {
  return (
    <BaseLayout showAccount={true}>
      <Main>
        <AlarmList>
          {alarmList.map((alarm) => (
            <AlarmComponent key={JSON.stringify(alarm)} alarm={alarm} />
          ))}
        </AlarmList>
        <AlarmList>
          <AlarmForm
            functionToSubmit={() => {
              return;
            }}
          />
        </AlarmList>
      </Main>
    </BaseLayout>
  );
}
