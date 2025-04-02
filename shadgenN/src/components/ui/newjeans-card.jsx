import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function NewjeansCard({ name, role, profileImage, onBuy }) {
  return (
    <Card className="flex flex-col w-92">
      <CardHeader className="flex flex-col">
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
        <CardContent>
          <img src={profileImage} className="object-cover scale-100 transition duration-500  hover:scale-105 rounded-xl min-w-68 max-h-68" />
        </CardContent>
        <CardFooter className="flex justify-between gap-3 w-full">
          <Button onClick={onBuy} className="w-2/3">
            Buy
          </Button>
          <Button variant="secondary" className="w-1/3">
            Sell
          </Button>
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
