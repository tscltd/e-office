import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-sm shadow">
        <CardContent className="py-6 space-y-4">
          <h2 className="text-2xl font-bold text-center">Đăng nhập</h2>
          <div className="space-y-2">
            <Label htmlFor="username">Tên đăng nhập</Label>
            <Input id="username" placeholder="Nhập tên đăng nhập" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input id="password" type="password" placeholder="Nhập mật khẩu" />
          </div>
          <Button className="w-full">Đăng nhập</Button>
        </CardContent>
      </Card>
    </main>
  );
}
