import React from "react";
import { Customized, IconType } from "@models/base";
import {
  FaAward,
  FaGlobe,
  FaHandshake,
  FaLaptopCode,
  FaLinkedin,
  FaMapMarked,
  FaMobileAlt,
} from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { MdGTranslate, MdOutlineEmail } from "react-icons/md";
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
  email: MdOutlineEmail,
  website: FaGlobe,
  linkedIn: FaLinkedin,
  phone: FaMobileAlt,
  map: FaMapMarked,
};

interface Props extends Customized {
  type: IconType;
}

const Icon = ({ type, className }: Props) => {
  const IconComponent = icons[type] ? icons[type] : FaLaptopCode;
  return <IconComponent className={className} />;
};

export default Icon;
