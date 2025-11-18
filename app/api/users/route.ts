import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Get all users",
    users: [],
  });
}

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    message: "User created successfully",
    data: body,
  });
}

export async function PUT(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    message: "User updated successfully",
    data: body,
  });
}

export async function DELETE() {
  return NextResponse.json({
    message: "User deleted",
  });
}