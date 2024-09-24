module verilog_sm (
    input new_data,
    input push_a_done,
    input push_b_done,


    output finish_strb,

    input clk,
    input rstn
);


typedef enum logic[1:0] {IDLE,PUSH_A,PUSH_B,CRC} state_t;
state_t state;
state_t nextstate;

always @(posedge clk or negedge rstn) begin
    if (~rstn) begin
        state <= IDLE;
    end
    else begin
        state <= nextstate;
    end
end

always_comb begin
    case (state)
        IDLE: if(new_data) begin
            nextstate = PUSH_A;
        end else begin
            nextstate = IDLE;
        end
        PUSH_A: begin
            if(push_a_done) nextstate = PUSH_B;
            else if (push_a_done&push_b_done) nextstate = CRC;
            else nextstate = IDLE;
        end
        PUSH_B: if(push_b_done) nextstate = PUSH_A; else nextstate =IDLE;
        CRC: nextstate = IDLE;
        default: nextstate = IDLE;
    endcase
end

assign finish_strb = nextstate == CRC;

endmodule
