import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Share2 } from "lucide-react";
import { contact } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const items = [
  { icon: Mail, label: "Email", value: contact.email },
  { icon: Phone, label: "Téléphone", value: contact.phone },
  { icon: MapPin, label: "Adresse", value: contact.address },
  { icon: Facebook, label: "Facebook", value: contact.facebook },
  { icon: Instagram, label: "Instagram", value: contact.instagram },
  { icon: Share2, label: "Autres réseaux", value: contact.other }];

  return null;

}