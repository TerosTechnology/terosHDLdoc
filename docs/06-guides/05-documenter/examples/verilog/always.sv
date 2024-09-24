module alwaysmod (
    input clk,
    input rstn
);
    
always @(posedge clk or negedge rstn) begin: myproc
    
end
endmodule