<template>
    <div class="settitng">
        <div class>
            <div class="conten position">菜单设置</div>
            <div class="conten zthree">
                <div class="zthreeData">
                    <el-tree
                        :data="zthreeData"
                        :default-expand-all="true"
                        node-key="id"
                        ref="tree"
                        highlight-current
                        :expand-on-click-node="false"
                        :props="defaultProps"
                    >
                        <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span>{{ node.label }}</span>
                            <span>
                                <el-button type="text" size="mini" v-if="data.type !== 3" @click="() => append(data)">添加子级</el-button>
                            </span>
                            <span>
                                <el-button type="text" size="mini" @click="() => edit(data)">编辑当前</el-button>
                                <el-button type="text" size="mini" @click="() => del(data)">删除当前</el-button>
                            </span>
                        </span>
                    </el-tree>
                </div>
            </div>
        </div>
        <!-- 添加菜单 -->
        <el-dialog :title="title" :visible.sync="dialogVisible" width="450px" :close-on-click-modal="false">
            <el-form label-width="100px" :model="formLabelAlign">
                <el-form-item label="菜单名">
                    <el-input v-model="formLabelAlign.name" placeholder="请输入菜单名"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-select clearable v-model="formLabelAlign.type" placeholder="请选择类型">
                        <el-option v-for="item in type" :key="item.type" :label="item.val" :value="item.type"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input v-model="formLabelAlign.seq_order" placeholder="请输入排序"></el-input>
                </el-form-item>
                <el-form-item label="父级菜单">
                    <el-select clearable v-model="formLabelAlign.parent_id" placeholder="请选择父级菜单">
                        <el-option v-for="item in level" :key="item.id" :label="item.showName" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="服务端路由" v-if="formLabelAlign.type != 1">
                    <el-input v-model="formLabelAlign.route_api" placeholder="请输入服务端路由"></el-input>
                </el-form-item>
                <el-form-item label="链接网址" v-if="formLabelAlign.type == 2">
                    <el-input v-model="formLabelAlign.route_web" placeholder="请输入链接网址"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose(formLabelAlign)">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script type="text/javascript">
import { menuIndex, menuPost, menuUpdate, menuDelete, menuLevel } from "@/api/set.js";
import axios from "@/utils/fetch";

export default {
    data() {
        return {
            title: "",
            dialogVisible: false,
            zthreeData: [], //	权限数据
            defaultProps: {
                children: "data",
                label: "showName"
            },
            formLabelAlign: {
                parent_id: "",  //  父级菜单ID
                type: '',   //  1=>目录 2=>页面 3=>按钮 （必填）
                seq_order: "", //  排序
                route_api: "", //  服务端路由
                name: "",   //  菜单名称
                route_web: ""   //  web端路由
            },
            type: [
                { type: 1, val: "目录" },
                { type: 2, val: "页面" },
                { type: 3, val: "按键" }
            ],
            level: [],
        };
    },
    mounted() {
        this.index();
    },
    methods: {
        async index() {
            let data = await menuIndex();
            if (data.code == 200) {
                this.zthreeData = data.data.menu;
                console.log(this.zthreeData)
            }
        },
         append(val) {
            //  console.log(val)
            this.title = "添加菜单";
            this.formLabelAlign = {
                parent_id: val.id,
                type: '',
                seq_order: "",
                route_api: "",
                name: ""
            };
            this.levelGet(val.id);
        },
        edit(val) {
            //	编辑菜单
            this.title = "编辑菜单";
            this.formLabelAlign = val;
            this.levelGet(val.id);
        },
        async levelGet(id){
            let data = await menuLevel({id: id});
            if (data.code == 200) {
                this.level = data.data.sameMenu;
                this.dialogVisible = !this.dialogVisible;
            }
        },
        async handleClose() {
            //   添加
            let data = "";
            if (this.title === "添加菜单") {
                data = await menuPost(this.formLabelAlign);
            } else {
                data = await menuUpdate(this.formLabelAlign);
            }
            if (data.code == 200) {
                this.$message({ message: data.data.msg, type: "success" });
            }
            this.index();
            this.dialogVisible = !this.dialogVisible;
        },
        del(val) {
            //	删除当前结构
            this.$confirm("此操作将删除此结构, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    menuDelete({ id: val.id }).then(data => {
                        if (data.code === 200) {
                            this.index();
                            this.$message({ message: '删除成功~', type: "success"});
                        }
                    });
                })
                .catch(() => {
                    this.$message({ type: "info", message: "已取消操作~" });
                });
        },
    },
};
</script>
<style type="text/css" scoped lang="less">
.settitng {
    .position {
        height: 48px;
        background: #f3f3f3;
        border: 1px solid #e4e4e4;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 15px;
        font-size: 12px;
        .title {
            padding-left: 25px;
        }
    }
    .zthree {
        /*overflow-y: scroll; */
        border: 1px solid #e4e4e4;
        border-top: none;
        padding: 50px;
        box-sizing: border-box;
        .btn {
            padding: 100px;
        }
    }
}
</style>