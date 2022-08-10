import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import AlarmComponent from "../components/elements/alarm";
import AlarmForm from "../components/elements/alarmForm";
import LoadingRotation from "../components/elements/loading";
import BaseLayout from "../components/layout/base";
import { Alarm } from "../types/types";
import { addAlarm, getMyAlarm } from "../utils/api";
import alarmList from "../utils/dummy";

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
  const queryClient = useQueryClient();
  const {
    data: alarmList,
    status,
    error,
  } = useQuery<Alarm[] | undefined>(["myAlarms"], getMyAlarm, {
    retry: 1,
  });

  const { mutateAsync: addAlarmAndMutate } = useMutation(addAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries(["myAlarms"]);
    },
  });

  if (status === "loading") {
    return <LoadingRotation />;
  }

  if (status === "error") {
    console.log(error);
  }

  return (
    <BaseLayout showAccount={true}>
      <Main>
        <AlarmList>
          {(alarmList ?? []).map((alarm) => (
            <AlarmComponent key={JSON.stringify(alarm)} alarm={alarm} />
          ))}
        </AlarmList>
        <AlarmList>
          <AlarmForm functionToSubmit={addAlarmAndMutate} />
        </AlarmList>
      </Main>
    </BaseLayout>
  );
}
