import React from "react";
import { Customized, IconType } from "@models/base";
import {
  FaAward,
  FaGlobe,
  FaHandshake,
  FaHome,
  FaLaptopCode,
  FaLinkedin,
  FaMapMarked,
  FaMobileAlt,
} from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { MdGTranslate, MdOutlineEmail } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { RiOrganizationChart } from "react-icons/ri";
import { GiFalling } from "react-icons/gi";

const icons: Record<IconType, React.FC<React.SVGAttributes<SVGElement>>> = {
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
  home: FaHome,
  aboutMe: GiFalling,
  projects: RiOrganizationChart,
};

interface Props extends Customized {
  type: IconType;
}

const Icon = ({ type, className }: Props) => {
  const IconComponent = icons[type] ? icons[type] : FaLaptopCode;
  return <IconComponent className={className} />;
};

export default Icon;
