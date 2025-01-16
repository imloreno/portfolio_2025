import React from "react";
import { Customized, IconType } from "@models/base";
import { FaAward, FaHandshake, FaLaptopCode } from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { MdGTranslate } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

const icons = {
  laptop: FaLaptopCode,
  award: FaAward,
  copilot: GoCopilot,
  translate: MdGTranslate,
  handshake: FaHandshake,
  github: FiGithub,
  details: TbListDetails,
};

interface Props extends Customized {
  type: IconType;
}

const Icon = ({ type, className }: Props) => {
  const IconComponent = icons[type] ? icons[type] : FaLaptopCode;
  return <IconComponent className={className} />;
};

export default Icon;
