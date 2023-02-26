import { useState } from "react";
import { Flex, Text } from "rebass";

import { Card } from "../../components/Card";
import { DragAndDropSection } from "../../components/Card/DragAndDropSection";
import { FormSection } from "../../components/Card/Forms";
import { TopicOfTheDay } from "../../components/Card/SubjectCard/TopicOfTheDay";
import { RightButtons } from "../search/Buttons/RightButtons";
import { TopButtons } from "./TopButtons";

interface PrincipalCardProps {
  title: string;
  page?: string;
  description: string;
  displayTop: boolean;
  displayRight: boolean;
}

export const PrincipalCard = ({ ...props }: PrincipalCardProps) => {
  const [wichButtonTop, setWichButtonTop] = useState<"button1" | "button2">("button1");
  const [wichButtonRight, setWichButtonRight] = useState<"button1" | "button2">("button1");

  return (
    <Flex height="calc(100vh - 80px)" alignItems="center" width="50%" justifyContent="center">
      <Flex
        width="fit-content"
        height="fit-content"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ position: "relative" }}
      >
        {props.displayTop ? <TopButtons wichButton={wichButtonTop} setWichButton={setWichButtonTop} /> : null}
        <Card widthCard={450} heightCard={437} bg="var(--blueBeige)">
          <Text as="p" color="var(--lightBeige)" fontSize={32} fontWeight={300} marginTop={10}>
            {props.title}
          </Text>
          {wichButtonTop == "button1" && props.displayTop === true ? (
            <DragAndDropSection description={props.description} />
          ) : wichButtonTop == "button2" && props.displayTop === true ? (
            <FormSection wichButtonRight={wichButtonRight} page={props.page ?? null} />
          ) : (
            <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
              <TopicOfTheDay />
            </Flex>
          )}
        </Card>
        {wichButtonTop == "button2" && props.displayRight === true ? (
          <RightButtons wichButton={wichButtonRight} setWichButton={setWichButtonRight} />
        ) : null}
      </Flex>
    </Flex>
  );
};