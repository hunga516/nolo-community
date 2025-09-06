"use client"

import axiosInstance from "@/app/api/axios"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useUser, useAuth } from "@clerk/nextjs"
import { useMutation } from "@tanstack/react-query"
import { Link, LoaderCircle } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const CheckCid = () => {
    const { user, isLoaded } = useUser()
    const { isSignedIn } = useAuth()
    const [cid, setCid] = useState("")

    const handleSubmitCid = async () => {
        if (!isSignedIn) {
            toast.error("Bạn chưa đăng nhập");
            return;
        }
        try {
            await axiosInstance.post('/user/cid', {
                cid,
                clerkId: user?.id
            })
            toast.success("Xác thực thành công")
        } catch (error) {
            toast.error('Có lỗi khi xác thực')
        }
    }

    const mutation = useMutation({
        mutationFn: handleSubmitCid,
        onSuccess: () => {
            user?.reload();
        }
    });

    console.log("log o client");

    if (!isLoaded) return null
    if (!isSignedIn) return null
    return (
        <Dialog open={!user?.publicMetadata.cid && isSignedIn}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Liên kết tài khoản bằng 1 click</DialogTitle>
                    <DialogDescription>Hoàn tất liên kết tài khoản để trải nghiệm trọn vẹn hơn</DialogDescription>
                </DialogHeader>
                <div className="my-2 gap-4">
                    <Input name="cid" placeholder="Nhập cid từ nút F12 trong game ..." className="col-span-3" onChange={(e) => setCid(e.target.value)} />
                </div>
                <DialogFooter>
                    <Button disabled={mutation.isPending} onClick={() => mutation.mutate()} className="bg-purple-500">
                        {mutation.isPending ? (
                            <>
                                <LoaderCircle className="font-bold animate-spin" />
                            </>
                        ) : (
                            <>
                                <Link className="font-bold" /> Liên kết
                            </>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CheckCid