import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NewjeansCard({ name, role, profileImage, onBuy }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={profileImage} alt={profileImage} className="w-70 h-68 transition hover:scale-120 duration-500 rounded-2xl" />
      </CardContent>
      <CardFooter>
        <Button onClick={onBuy}>Buy</Button>
        <Button>Sell</Button>
      </CardFooter>
    </Card>
  );
}
