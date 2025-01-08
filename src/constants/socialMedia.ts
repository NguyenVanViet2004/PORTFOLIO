import React from "react"
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink,
  Twitter,
  Mail,
  Facebook,
  Code,
  Send
} from "lucide-react"

export const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/NguyenVanViet2004" },
  { icon: Facebook, link: "https://www.facebook.com/VietNguyenVan2004" },
  { icon: Instagram, link: "https://www.instagram.com/nwstandfornvv/" },
  { icon: Code, link: "https://leetcode.com/u/CaMapNho/" },
]

export const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/nw2004/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@nwstandfornvv",
    icon: Instagram,
    url: "https://www.instagram.com/nwstandfornvv",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "LeetCode",
    displayName: "LeetCode",
    subText: "@CaMapNho",
    icon: Code,
    url: "https://leetcode.com/u/CaMapNho/",
    color: "#e74949",
    gradient: "from-[#FF0000] to-[#CC0000]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "NguyenVanViet2004",
    icon: Github,
    url: "https://github.com/NguyenVanViet2004",
    color: "#ffffff",
    gradient: "from-[#333] to-[#0f161d]",
  },
  {
    name: "Facebook",
    displayName: "Facebook",
    subText: "Viet Nguyen Van",
    icon: Facebook,
    url: "https://www.facebook.com/VietNguyenVan2004",
    color: "#4267B2",
    gradient: "from-[#4267B2] to-[#0054fb]",
  }
]
