package com.chat.app.controllers;

import com.chat.app.entities.Message;
import com.chat.app.entities.Room;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.chat.app.repositories.RoomRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/rooms")
@RequiredArgsConstructor
public class RoomController {
    private final RoomRepository roomRepository;

    @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody String roomId){
        if(roomRepository.findByRoomId(roomId) != null){
            return ResponseEntity.badRequest().body("Room already exists");
        }
        Room room = new Room();
        room.setRoomId(roomId);
        Room savedRoom = roomRepository.save(room);
        System.out.println("Komalllll"+savedRoom.getRoomId()+" "+savedRoom.getId()+" " + savedRoom.getMessages());
        return ResponseEntity.status(HttpStatus.CREATED).body(savedRoom);
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<?> joinRoom(@PathVariable String roomId){
        Room room = roomRepository.findByRoomId(roomId);
        if(room == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(room);
    }

    @GetMapping("/{roomId}/messages")
    public ResponseEntity<List<Message>> getMessages(
            @PathVariable String roomId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ){
        Room room = roomRepository.findByRoomId(roomId);
        if(room == null){
            return ResponseEntity.notFound().build();
        }

        List<Message> messages = room.getMessages();
        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, messages.size());

        return ResponseEntity.ok(messages.subList(startIndex, endIndex));
    }
}
