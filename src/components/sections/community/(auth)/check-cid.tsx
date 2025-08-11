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
import { useUser } from "@clerk/nextjs"
import { Lock } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const CheckCid = () => {
    const { user } = useUser()
    const [cid, setCid] = useState("")

    const handleSubmitCid = async () => {
        try {
            await axiosInstance.post('/user/cid', {
                cid,
                clerkId: user?.id
            })
            toast.success("Xác thực thành công")
            user?.reload()
        } catch (error) {
            toast.error('Có lỗi khi xác thực')
        }
    }

    return (
        <Dialog open={!user?.publicMetadata.cid}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Xác thực tài khoản bằng 1 click</DialogTitle>
                    <DialogDescription>Hoàn tất thông tin tài khoản để trải nghiệm trọn vẹn hơn</DialogDescription>
                </DialogHeader>
                <div className="my-2 gap-4">
                    <Input name="cid" placeholder="Nhập cid từ tải khoản Rockstar Games ..." className="col-span-3" onChange={(e) => setCid(e.target.value)} />
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmitCid} className="bg-purple-500">
                        <Lock className="font-bold" /> Xác thực
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CheckCid